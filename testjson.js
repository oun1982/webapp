var jsont = {};
console.log(typeof(jsont));
//jsont.push({id: "1", name: "pongsakon", position: "engineer"});
//var myobj = {src:[
//    {id: "1", name: "pongsakon", position: "engineer"},
//    {id: "2", name: "jeraporn", position: "engineer"}
//  ]};
var myobj = {src:[],
            dst:[]};
//console.log(myobj.src[0].id);
var add = {id: "3", name: "newuser", position: "engineer"}
myobj['src'].push(add);
console.log(myobj);

var id = "4", name = "newuser2", position = "support";
var add = {id: id, name: name, position: position}
myobj['src'].push(add);
console.log(myobj);
