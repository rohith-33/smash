var express=require('express');
var app=express();
app.use(express.static(__dirname+'/frontend'));
app.use('/',function(req,res,next){
    console.log("yeah i got request first,but i am not handling it");
     next();
})
app.get('/Text-Tages',function(req,res){
    //res.send('Hello world');
    res.sendFile(__dirname+'/frontend/html/TextTages.html');
})
app.get('/clock',function(req,res){
    //res.send('Hello world');
    res.sendFile(__dirname+'/frontend/html/clock.html');
})
app.get('/resume',function(req,res){
    //res.send('Hello world');
    res.sendFile(__dirname+'/frontend/html/resume.html');
})
app.get('/snake',function(req,res){
    //res.send('Hello world');
    res.sendFile(__dirname+'/frontend/html/snake.html');
})
app.get('/tambola',function(req,res){
    //res.send('Hello world');
    res.sendFile(__dirname+'/frontend/html/tambola.html');
})
app.get('/',function(req,res){
    //res.send('Hello world');
    res.sendFile(__dirname+'/frontend/html/index.html');
})
var port=process.env.PORT || 3000 ;
app.listen(port,function(){
     console.log("Site running on http://localhost:"+port);
});