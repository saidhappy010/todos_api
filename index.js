var express = require ('express'),
    app = express(),
    todoRoutes = require('./routes/todos');
const port = 3000;

app.use('/api/todos', todoRoutes);

app.get('/', function(req, res){
    res.send('HI THERE FROM EXPRESS');
})
app.listen(port, function(){
    console.log('APP IS RUNNING ON PORT '+ port);
})   
   