import express from 'express'
import MovieAPI from '../controllers/movieController.js'
const movieRouter = express.Router()
const movieAPI = new MovieAPI()

movieRouter.get('/upcoming', async (req, res)=>{
    let response = await movieAPI.getUpcoming()
    res.send(response)
})

export default movieRouter