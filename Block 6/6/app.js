import { Book, Lend } from './objects.js'
import { books, lends } from './data.js'
import { config } from './config.js'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ==== Book Routes ====

/**
 * @swagger
 * /books:
 *   get:
 *     tags: [Book]
 *     description: Gibt alle Bücher zurück
 *     responses:
 *       200:
 *         description: Erfolgreich
 */
app.get('/books', (request, response) => {
    response.status(200).json(books)
})

// Read Book by ID
app.get('/books/:isbn', (request, response) => {
    try {
        const target = books.find(book => book.isbn === request.params.isbn)
        response.status(200).json(target)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

/**
 * @swagger
 * /books:
 *   post:
 *     tags: [Book]
 *     description: Neues Buch erstellen
 *     responses:
 *       201:
 *         description: Buch erstellt
 */
app.post('/books', validateBook, (request, response) => {
    try {
        const book = Object.assign(new Book(), request.body)
        books.push(book)
        response.status(201).json(book)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

// Replace Book
app.put('/books/:isbn', validateBook, (request, response) => {
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
app.delete('/books/:isbn', (request, response) => {
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
app.patch('/books/:isbn', (request, response) => {
    try {
        const target = books.find(book => book.isbn === request.params.isbn)
        Object.assign(books[books.indexOf(target)], request.body)
        response.status(200).json(books[books.indexOf(target)])

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

// ==== Lend Routes ====

/**
 * @swagger
 * /lend:
 *   get:
 *     tags: [Lend]
 *     description: Liste aller Ausleihen
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/lends', (request, response) => {
    response.status(200).json(lends)
})

// Read Lend by ID
app.get('/lends/:id', (request, response) => {
    try {
        const target = lends.find(lend => lend.id === Number(request.params.id))
        response.status(200).json(target)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

/**
 * @swagger
 * /lend:
 *   post:
 *     tags: [Lend]
 *     description: Neues Buch ausleihen
 *     responses:
 *       201:
 *         description: Ausleihe registriert
 */
app.post('/lends', validateLend, (request, response) => {
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
app.delete('/lends/:id', (request, response) => {
    try {
        const target = lends.find(lend => lend.id === Number(request.params.id))
        const deletedLend = lends.splice(lends.indexOf(target), 1)[0]
        response.status(200).json(deletedLend)

    } catch (error) {
        console.error(error)
        response.sendStatus(404)
    }
})

app.listen(config.port, () => {
    console.log('Listening on Port:', config.port)
})
