import verifyToken from '../middleware/verifyToken.js'
import express from 'express'

const router = express.Router()

router.get('/', verifyToken, (request, response) => {
    response.json(request.headers)
})

export default router
