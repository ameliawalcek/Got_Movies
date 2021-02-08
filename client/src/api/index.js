import axios from 'axios'

const movieURL = 'http://localhost:8080/movie'

export const getUpcoming = () => axios.get(`${movieURL}/upcoming`)
