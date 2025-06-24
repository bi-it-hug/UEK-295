import { Lend } from '../models/Lend.js'
import express from 'express'

const router = express.Router()

// Middleware
router.use(verify)

// Read Lends
router.get('/', verify, async (request, response) => {
    const lends = await Lend.find()
    response.status(200).json(books)
})

// Read Lend by ID
router.get('/:id', verify, (request, response) => {
    try {
        const target = lends.find(lend => lend.id === Number(request.params.id))
        response.status(200).json(target)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

// Lend Book
router.post('/', verify, (request, response) => {
    try {
        const lend = Object.assign(new Lend(), request.body)
        lends.push(lend)
        response.status(201).json(lend)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

// Delete Lend
router.delete('/:id', verify, (request, response) => {
    try {
        const target = lends.find(lend => lend.id === Number(request.params.id))
        const deletedLend = lends.splice(lends.indexOf(target), 1)[0]
        response.status(200).json(deletedLend)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

function verify(request, response, next) {
    request.session.authenticated ? next() : response.sendStatus(401)
}

export default router
