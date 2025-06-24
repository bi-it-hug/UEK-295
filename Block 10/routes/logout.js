import express from 'express'

const router = express.Router()

router.delete('/', (request, response) => {
    try {
        request.session.destroy((error) => {
            if (error) {
                console.error('Error destroying session:', error)
                return response.status(500).json({ error: 'Logout failed' })
            }
            response.json({ message: 'Successfully logged out' })
        })
    } catch (error) {
        console.error('Error during logout:', error)
        response.status(500).json({ error: 'Logout failed' })
    }
})

export default router
