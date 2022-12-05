const express =require('express');
const path= require("path");
const app= express();
const port=8000;
// For serving static file
app.use("/static",express.static('static'));

// set templet engine as pug
app.set('view engine','pug');
//  set the view directory 
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
  
    const params={};
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req,res)=>{
  
    const params={};
    res.status(200).render('contact.pug',params);
});
app.listen(port,()=>{
    console.log(`The app is open sucssesfully at ${port}`)
    });
