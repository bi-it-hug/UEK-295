import jwt from 'jsonwebtoken'
import config from '../config.js'

export default function verifyToken(request, response, next) {
    try {
        if (!request.session?.token) return response.status(401).json({ error: 'No Token provided' })
        let token = jwt.verify(request.session.token, config.session.secret)
        next()

    } catch (error) {
        response.status(401).json({ error: 'Invalid Token' })
    }
}
