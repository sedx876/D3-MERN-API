const express = require('express')

const app = express()

app.get('/', (req, res) =>{
  res.send('API is Running')
})

app.listen(5000, console.table('Server is Running on Port 5000!!'))