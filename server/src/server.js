import express from 'express'
import { config } from 'dotenv'
import ConfigureMongoDB from './config/mongodb.config.js';
import { UserRouter } from './routes/user.route.js';
import { NoteRouter } from './routes/note.route.js';
import { AuthRouter } from './routes/auth.route.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'

config();

const app = express()
const PORT = process.env.PROT || 5000

ConfigureMongoDB()

// Middleware -- 
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ["http://localhost:3000", "http://192.168.100.191:3000",],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));

app.get('/api', async (req, res) => {
    res.json({ message: "Server is up and running from express" })
})


app.use('/api/auth', AuthRouter)
app.use('/api/user', UserRouter)
app.use('/api/note', NoteRouter)




app.listen(PORT, () => {
    console.log(`\nServer is up & running on http://127.0.0.1:${PORT}`)
})