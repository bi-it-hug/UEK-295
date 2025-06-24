import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    year: String,
    author: String,
})

export const Book = mongoose.model('Book', bookSchema)
