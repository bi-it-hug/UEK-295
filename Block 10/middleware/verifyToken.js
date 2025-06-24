import jwt from 'jsonwebtoken'
import config from '../config.js'

export default function verifyToken(request, response, next) {
    try {
        const authHeader = request.headers.authorization
        if (!authHeader) return response.status(401).json({ error: 'No Token provided' })
        const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader
        const decoded = jwt.verify(token, config.session.secret)
        request.user = decoded
        next()

    } catch (error) {
        response.status(401).json({ error: 'Invalid Token' })
    }
}
