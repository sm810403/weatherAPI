const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html')
});
app.post('/',function(req,res){
   
})




app.listen(3000,function(){
    console.log('server is running on port 3000');
});
