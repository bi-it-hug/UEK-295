import config from '../config.js'
import express from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../db/models/user.js'

const router = express.Router()

router.post('/', async (request, response) => {
    let [email, password] = Buffer.from(request.headers.authorization.split(' ')[1], 'base64').toString().split(':')
    let user = await User.findOne()

    if (email === user.email && password === user.password) {
        let token = jwt.sign(user.toObject(), config.session.secret, { expiresIn: '24h' })
        request.session.token = token
        response.json(request.session.token)

    } else {
        response.status(401).json('Error!')
    }
})

export default router
