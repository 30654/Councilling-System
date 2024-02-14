const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app=express()
app.use(cors())
app.use(express.json())

const Client= new MongoClient('65c35c488e183a3b3309489e')
Client.connect()
const db =Client.db('councilling 2')
const col=db.collection('register')
col.insertOne({'student':"345"})

const express = require('express');
const path = require('path');
const { request } = require('http')

app.use(express.static(path.join(__dirname, 'build')));

app.get('/retrive',req,res=>{
    const result=await  col.find().toArray();
    console.log(result)
    res.send(result)
})
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
