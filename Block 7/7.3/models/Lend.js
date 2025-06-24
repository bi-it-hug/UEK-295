import mongoose from 'mongoose'

const lendSchema = new mongoose.Schema({
    isbn: String,
    customerId: Number,
    borrowedAt: Date,
    returnedAt: Date,
})

export const Lend = mongoose.model('lend', lendSchema)
