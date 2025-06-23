import { credentials } from './credentials.js'
import { _public, _private } from './data.js'
import { config } from './config.js'
import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/public', (request, response) => {
    response.status(200).json(_public)
})

app.get('/private', (request, response) => {
    const data = request.headers.authorization.split(' ')[1]
    const [username, password] = Buffer.from(data, 'base64').toString().split(':')

    if (username === credentials.username && password === credentials.password) {
        response.status(200).json(_private)

    } else {
        response.sendStatus(401)
    }
})

app.listen(config.port, () => {
    console.clear()
    console.log('Server running on Port:', config.port)
})
