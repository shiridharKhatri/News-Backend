const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const axios = require('axios');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"})
// app.use('/', (req,res)=>{
//      res.sendFile('')
// })
app.use(cors())
app.use(express.json())
const apiKey = process.env.API_KEY;
app.post('/api', async(req,res)=>{
    const {search, from, sortBy, page} = req.body;
    // console.log(req.body)
    let data =  await axios(`https://newsapi.org/v2/everything?q=${search}&from=${from}&sortBy=${sortBy}&apiKey=${apiKey}&page=${page}&pageSize=8`)
    res.json(data.data)
})
app.get('/apiTwo', async(req,res)=>{
    let data =  await axios(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`)
    res.json(data.data)
})
app.post('/apiThree', async(req, res)=>{
    const {search, from, sortBy, page} = req.body;
    let data =  await axios(`https://newsapi.org/v2/everything?q=${search}&from=${from}&sortBy=${sortBy}&apiKey=${apiKey}&pageSize=8&page=${page}`)
    res.json(data.data)
})
app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
})