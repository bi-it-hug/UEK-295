import express from 'express'
import { Task } from '../db/models/task.js'
import verifyToken from '../middleware/verifyToken.js'

const router = express.Router()

router.get('/', verifyToken, async (request, response) => {
    let tasks = await Task.find()
    response.json(tasks)
})

router.post('/', verifyToken, async (request, response) => {
    let task = new Task(request.body)
    await task.save()
    response.json(task)
})

router.get('/:id', verifyToken, async (request, response) => {
    let task = await Task.findById(request.params.id)
    response.json(task)
})

router.patch('/:id', verifyToken, async (request, response) => {
    let task = await Task.findByIdAndUpdate(request.params.id, request.body)
    response.json(task)
})

router.delete('/:id', verifyToken, async (request, response) => {
    let task = await Task.findByIdAndDelete(request.params.id)
    response.json(task)
})

export default router
