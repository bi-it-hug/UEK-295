import mongoose from 'mongoose'

export const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    dueDate: Date
}, { versionKey: false })
