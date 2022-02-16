const express = require('express');
const ejs = require('ejs')
const app = express();
const path = require('path')
const port = 3000


app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.set('view engine', 'ejs');
app.use('/', require('../router'));
app.set('views',path.join(__dirname,'views'))

app.use(express.static(__dirname + '/public'));












app.listen(port, (req,res) => {
console.log('corriendo')
})

