import express from 'express'
import { Task } from '../db/models/task.js'
import verifyToken from '../middleware/verifyToken.js'
import validateTask from '../middleware/validateTask.js'

const router = express.Router()

router.get('/', verifyToken, async (request, response) => {
    try {
        const tasks = await Task.find()
        response.json(tasks)

    } catch (error) {
        console.error('Error fetching tasks:', error)
        response.status(500).json({ error: 'Failed to fetch tasks' })
    }
})

router.post('/', verifyToken, validateTask, async (request, response) => {
    try {
        const task = new Task(request.body)
        const savedTask = await task.save()
        response.status(201).json(savedTask)

    } catch (error) {
        console.error('Error creating task:', error)
        response.status(500).json({ error: 'Failed to create task' })
    }
})

router.get('/:id', verifyToken, async (request, response) => {
    try {
        const task = await Task.findById(request.params.id)
        if (!task) return response.status(404).json({ error: 'Task not found' })
        response.json(task)

    } catch (error) {
        console.error('Error fetching task:', error)
        response.status(500).json({ error: 'Failed to fetch task' })
    }
})

router.patch('/:id', verifyToken, validateTask, async (request, response) => {
    try {
        const task = await Task.findByIdAndUpdate(request.params.id, request.body)
        if (!task) return response.status(404).json({ error: 'Task not found' })
        response.json(task)

    } catch (error) {
        console.error('Error updating task:', error)
        response.status(500).json({ error: 'Failed to update task' })
    }
})

router.delete('/:id', verifyToken, async (request, response) => {
    try {
        const task = await Task.findByIdAndDelete(request.params.id)
        if (!task) return response.status(404).json({ error: 'Task not found' })
        response.json(task)

    } catch (error) {
        console.error('Error deleting task:', error)
        response.status(500).json({ error: 'Failed to delete task' })
    }
})

export default router
