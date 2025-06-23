import { credentials } from './credentials.js'
import { _public, _private } from './data.js'
import { config } from './config.js'
import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {},
}))

app.post('/name', (request, response) => {
    request.session.name = request.query
    response.json(request.session.name)
})

app.get('/name', (request, response) => {
    response.json(request.session)
})

app.delete('/name', (request, response) => {
    delete request.session.name
    response.json(request.session)
})

app.listen(config.port, () => {
    console.clear()
    console.log('Server running on Port:', config.port)
})
