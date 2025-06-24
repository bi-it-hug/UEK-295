import express from 'express'

const router = express.Router()

router.delete('/', (request, response) => {
    try {
        // With token-based authentication, logout is primarily handled on the client side
        // by removing the token from storage. The server just confirms the logout.
        response.json({ message: 'Successfully logged out' })
    } catch (error) {
        console.error('Error during logout:', error)
        response.status(500).json({ error: 'Logout failed' })
    }
})

export default router
