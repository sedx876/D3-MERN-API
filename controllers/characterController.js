import asyncHandler from 'express-async-handler'
import Character from '../models/characterModel.js'

const getCharacters = asyncHandler(async(req, res) => {
  const characters = await Character.find({})
  res.json(characters)
})

const getCharacterById = asyncHandler(async(req, res) => {
  const character = await Character.findById(req.params.id)
  
  if(character){
    res.json(character)
  }else{
    res.status(404)
    throw new Error('Character NOT Found!!')
  }
})

export {
  getCharacters,
  getCharacterById
}