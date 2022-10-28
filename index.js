var PORT =process.env.PORT ||8888;
const express= require('express')
const data = require('./server')

const api = express()

const HOST ='localhost'

api.get('/',(req,res) =>{
    res.send('welcom')
      })


api.get('/details',(req,res) =>{
    res.status(200).json(data)
})

api.listen(PORT, () => console.log('API running at ${HOST}:${PORT}'))