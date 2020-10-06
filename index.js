var express = require ('express'),
    app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send('HI THERE FROM EXPRESS');
})
app.listen(port, function(){
    console.log('APP IS RUNNING ON PORT '+ port);
})   
   