import express from 'express'
import MovieAPI from '../controllers/movieController.js'

const movieRouter = express.Router()
const movieAPI = new MovieAPI()

movieRouter.get('/upcoming', async (req, res) => {
    let response = await movieAPI.getUpcoming()
    res.send(response)
})
movieRouter.get('/trending', async (req, res) => {
    let response = await movieAPI.getTrending()
    res.send(response)
})

movieRouter.get('/details/:id', async (req, res) => {
    const { id } = req.params
    let response = await movieAPI.getMovie(id)
    res.send(response)
})
movieRouter.get('/search/title/:search', async (req, res) => {
    const { search } = req.params
    let response = await movieAPI.getTitleSearch(search)
    res.send(response)
})

export default movieRouter