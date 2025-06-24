import { Book } from '../models/Book.js'
import express from 'express'

const router = express.Router()

// Read Books
router.get('/', async (request, response) => {
    const books = await Book.find()
    response.status(200).json(books)
})

// Read Book by ID
router.get('/:isbn', async (request, response) => {
    try {
        let target = books.find(book => book.isbn === request.params.isbn)
        response.status(200).json(target)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

// Create Book
router.post('/', async (request, response) => {
    try {
        let book = new Book({
            isbn: request.body.isbn,
            title: request.body.title,
            year: request.body.year,
            author: request.body.author,
        })
        await book.save()
        response.status(201).json(book)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

// Replace Book
router.put('/:isbn', (request, response) => {
    try {
        const target = books.find(book => book.isbn === request.params.isbn.toString())
        books[books.indexOf(target)] = Object.assign(new Book(), request.body)
        response.status(200).json(books[books.indexOf(target)])

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

// Delete Book
router.delete('/:isbn', (request, response) => {
    try {
        const target = books.find(book => book.isbn === request.params.isbn)
        const deletedBook = books.splice(books.indexOf(target), 1)[0]
        response.status(200).json(deletedBook)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

// Update Book
router.patch('/:isbn', (request, response) => {
    try {
        const target = books.find(book => book.isbn === request.params.isbn)
        Object.assign(books[books.indexOf(target)], request.body)
        response.status(200).json(books[books.indexOf(target)])

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

export default router
