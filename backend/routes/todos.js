import { Todo } from '../models/todo'
import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {

  const { name, author, iud, isComplete, date } = req.body

  let todo = new Todo({
    name,
    author,
    iud,
    isComplete,
    date,
  })

  try{
    todo = await todo.save()
    res.send(todo)
  } catch(error) {
    res.status(500).send(error.message)
    console.log(error.message)
  }
})

module.exports = router