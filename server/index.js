import express from "express"
import mongoose from 'mongoose'
import cors from "cors"
import movieRouter from './routes/movie.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/movie', movieRouter)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`up and running on ${PORT}`)
})