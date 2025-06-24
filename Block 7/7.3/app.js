import { config } from './config.js'
import { User } from './models/User.js'
import books from './routes/books.js'
import lends from './routes/lends.js'
import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

mongoose.connect(config.dbcs)

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
}))

// Routes
app.use('/books', books)
app.use('/lends', lends)

app.post('/login', (request, response) => {
    let auth = request.headers.authorization.split(' ')[1]
    let [email, password] = Buffer.from(auth, 'base64').toString().split(':')
    let clientCredentials = new User(email, password)

    if (clientCredentials.email === user.email && clientCredentials.password === user.password) {
        request.session.authenticated = true
        response.status(201).json(user.email)

    } else {
        request.session.authenticated = false
        response.sendStatus(401)
    }
})

app.get('/verify', (request, respone) => {
    if (request.session.authenticated) {
        respone.status(200).json(user.email)

    } else {
        respone.sendStatus(401)
    }
})

app.delete('/logout', (request, response) => {
    request.session.authenticated = false
    response.sendStatus(204)
})

app.listen(config.port, () => {
    console.log('Listening on Port:', config.port)
})
