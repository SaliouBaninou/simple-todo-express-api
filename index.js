import express from "express"
import cors from 'cors'
import todosRouter from './routes/todos.route.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(todosRouter)

app.listen(3000, () => console.log('Serveur démarré à : http://localhost:3000'))
