import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})
