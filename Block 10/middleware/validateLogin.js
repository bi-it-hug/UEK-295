export default function validateLogin(request, response, next) {
    const authHeader = request.headers.authorization
    if (!authHeader || !authHeader.startsWith('Basic ')) return response.status(400).json({ error: 'Authorization header required' })

    try {
        const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString()
        const [email, password] = credentials.split(':')

        if (!email || !password) return response.status(400).json({ error: 'Email and password required' })
        if (email.trim().length === 0 || password.trim().length === 0) return response.status(400).json({ error: 'Email and password cannot be empty' })

        request.credentials = { email: email.trim(), password: password.trim() }
        next()

    } catch (error) {
        return response.status(400).json({ error: 'Invalid authorization format' })
    }
}
