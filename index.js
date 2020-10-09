var express = require ('express'),
    app = express(),
    todoRoutes = require('./routes/todos'),
    bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile('index.html')
})
app.listen(port, function(){
    console.log('APP IS RUNNING ON PORT '+ port);
})   
   