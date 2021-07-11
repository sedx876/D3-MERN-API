const express = require('express')
const characters = require('./data/characters')

const app = express()

app.get('/', (req, res) =>{
  res.send('API is Running')
})

app.get('/api/characters', (req, res) =>{
  res.json(characters)
})

app.get('/api/characters/:id', (req, res) =>{
  const character = characters.find(c => c._id === req.params.id)
  res.json(character)
})

app.listen(5000, console.table('Server is Running on Port 5000!!'))