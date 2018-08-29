#!/usr/bin/node
var aio = require('asterisk.io'),
    ami = null;
var callcdr = {src:[],
              dst:[],
              cdr:[]}; 

ami = aio.ami(
    '127.0.0.1',   
     5038,               
    'beagle',            
    'password'             
);

ami.on('error', function(err){
    throw err;
});
 
ami.on('eventAny', function(data){
    //console.log(data.Event, data);
    if(data.Event == 'DialBegin'){
	//console.log(data.CallerIDNum + ' ' + data.ConnectedLineNum + ' ' + data.ChannelStateDesc + ' ' + data.Channel + ' ' 
	//+ data.DestChannel + ' ' + data.DestLinkedid);
	callcdr['src'].push({callerid: data.CallerIDNum, callee: data.ConnectedLineNum, linkdid: data.DestLinkedid})
    }	
    if(data.Event == 'DialEnd'){
    //    console.log(data.CallerIDNum + ' ' + data.ConnectedLineNum + ' ' + data.ChannelStateDesc + ' ' + data.Channel + ' ' 
	//+ data.DestChannel + ' ' + data.DestLinkedid);
    }
    if(data.Event == 'BlindTransfer'){
        console.log(data);
    }	
    if(data.Event == 'HangupRequest'){
        console.log(data.CallerIDNum + ' ' + data.ConnectedLineNum + ' ' + data.ChannelState + ' ' + data.Linkedid);
    }
    if(data.Event == 'Hangup'){
     //   console.log(data.CallerIDNum + ' ' + data.ConnectedLineNum + ' ' + data.Cause + ' ' + data.Channel);
    //callcdr['dst'].push({callerid: data.CallerIDNum, callee: data.CallerIDNum, linkdid: data.Linkedid}) 
    }
    if(data.Event == 'Cdr'){
    //console.log(data.Source + ' ' + data.Destination + ' ' + data.Channel + ' ' + data.AnswerTime + ' ' + data.EndTime + ' ' 
	//+ data.UniqueID);
    callcdr['cdr'].push({DateStart: data.AnswerTime, DateEnd: data.EndTime, Duration: data.BillableSeconds, src: data.Source,
    dst: data.Destination, channel:data.Channel, linkdid: data.UniqueID})
    }

console.log(callcdr);    
});


