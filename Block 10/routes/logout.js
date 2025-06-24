import express from 'express'

const router = express.Router()

router.delete('/', (request, response) => {
    request.session.destroy()
    response.json('Successfully logged out')
})

export default router
