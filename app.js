var express=require('express')
var app=express()
var path=require('path')
var bodyParser=require('body-parser')
var router=require('./route/route')
let insert = require('./route/insert')
let users = require('./route/users')
const cors =require('cors')
const passport= require('passport')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/',router)
app.use('/news',insert)
app.use('/new',users)

app.listen(3001)
console.log("port started")

module.exports=app;
