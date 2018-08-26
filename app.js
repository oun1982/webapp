var app = require('express')();
var path = require('path');
var users = require('./users');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

function getHomePage(req, res){
  res.render('index.Jade');

}
function getAboutPage(req, res){
  res.send('<h1>This is About Pages</h1>');
}

app.get('/', getHomePage);
app.get('/about', getAboutPage);
app.get('/user', function(req, res){
  res.json(users.findAll());
});
app.get('/user/:id', function(req, res) {
  var id = req.params.id;
  res.json(users.findById(id));
});
app.post('/newuser', function(req, res){
  var json = req.body;
  res.send('Add new ' + json.name + 'Completed!')
});

var server = app.listen(3000, function(){
console.log('Express is running port 3000');

});
