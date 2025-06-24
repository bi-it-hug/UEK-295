import config from '../config.js'
import express from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../db/models/user.js'
import validateLogin from '../middleware/validateLogin.js'

const router = express.Router()

router.post('/', validateLogin, async (request, response) => {
    try {
        const { email, password } = request.credentials
        const user = await User.findOne({ email })

        if (!user) return response.status(401).json({ error: 'Invalid credentials' })
        if (password !== user.password) return response.status(401).json({ error: 'Invalid credentials' })

        const token = jwt.sign(user.toObject(), config.session.secret, { expiresIn: '24h' })
        response.json({ token })

    } catch (error) {
        console.error('Error during login:', error)
        response.status(500).json({ error: 'Login failed' })
    }
})

export default router
