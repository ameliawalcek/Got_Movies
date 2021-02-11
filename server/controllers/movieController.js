import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const { API_KEY } = process.env

class MovieAPI {
    constructor() {
        this.baseURL = 'https://api.themoviedb.org/3'
        this.key = API_KEY
    }

    async getUpcoming() {
        try {
            return (await axios.get(`${this.baseURL}/movie/upcoming?api_key=${this.key}&language=en-US&page=1`)).data
        } catch (error) {
            console.log(error)
        }
    }

    async getTrending() {
        try {
            return (await axios.get(`${this.baseURL}/trending/movie/day?api_key=${this.key}&language=en-US&page=1`)).data
        } catch (error) {
            console.log(error)
        }
    }

    async getMovie(id) {
        try {
            return (await axios.get(`${this.baseURL}/movie/${id}?api_key=${this.key}&language=en-US`)).data
        } catch (error) {
            console.log(error)
        }
    }

    async getTitleSearch(search) {
        try {
            return (await axios.get(`${this.baseURL}/search/movie?api_key=${this.key}&query=${search}`)).data
        } catch (error) {
            console.log(error)
        }
    }


}
export default MovieAPI