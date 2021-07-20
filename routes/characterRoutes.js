import express from 'express'
import { getCharacters, 
         getCharacterById} from '../controllers/characterController.js'
         
const router = express.Router()


router.route('/').get(getCharacters)

router.route('/:id').get(getCharacterById)

export default router