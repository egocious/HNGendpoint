const express= require('express')
const data =require('./server')

const api = express()

const HOST ='localhost'
const PORT = 8888

api.get('/',(req,res) =>{
    res.send('welcom')
      })


api.get('/details',(req,res) =>{
    res.status(200).json(data)
})
     
api.listen(PORT, () => console.log('API running at ${HOST}:${PORT}'))