import express from 'express'
import asyncHandler from 'express-async-handler'
import Character from '../models/characterModel.js'
const router = express.Router()

router.get('/', asyncHandler(async(req, res) =>{
  const characters = await Character.find({})
  res.json(characters)
}))

router.get('/:id', asyncHandler(async(req, res) =>{
  const character = await Character.findById(req.params.id)
  
  if(character){
    res.json(character)
  }else{
    res.status(404).json({ message: 'Character Not Found'})
  }
  
}))

export default router