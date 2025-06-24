import mongoose from 'mongoose'
import { taskSchema } from '../schemas/task.js'
export const Task = mongoose.model('Task', taskSchema)
