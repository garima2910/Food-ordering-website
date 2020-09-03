const express =require('express');
const ejs=require('ejs');
const path=require('path');
const expressLayout=require('express-ejs-layouts');
const app=express();
const port =process.env.port||3000
app.use(express.static('public'));
app.get('/',function(req,res){
    res.render('home');
})
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs');
app.listen(port,()=>{
    console.log("listening on port "+port)
})
