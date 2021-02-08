import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const { API_KEY } = process.env

class MovieAPI {
    constructor() {
        this.baseURL = 'https://api.themoviedb.org/3/movie'
        this.key = API_KEY
    }

    async getUpcoming() {
        try {
            return (await axios.get(`${this.baseURL}/upcoming?api_key=${this.key}&language=en-US&page=1`)).data
        } catch (error) {
            console.log(error)
        }
    }


}
export default MovieAPI