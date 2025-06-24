export default function validateTask(request, response, next) {
    const { title } = request.body
    if (!title || title.trim().length === 0) return response.status(422).json({ error: 'Title is required' })
    next()
}
