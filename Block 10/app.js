import express from 'express'
import mongoose from 'mongoose'
import config from './config.js'
import session from 'express-session'
import tasks from './routes/tasks.js'
import login from './routes/login.js'
import logout from './routes/logout.js'
import verify from './routes/verify.js'

const app = express()

app.use(session(config.session))
app.use(express.json())

app.use('/tasks', tasks)
app.use('/login', login)
app.use('/logout', logout)
app.use('/verify', verify)

app.get('/', (request, response) => response.json('Task App'))
app.listen(config.port, () => console.log(`Server running on: http://localhost:${config.port}`))

mongoose.connect(config.dbcs).then(() => console.log('MongoDB connected')).catch(err => console.error('Mongo-Error', err))
