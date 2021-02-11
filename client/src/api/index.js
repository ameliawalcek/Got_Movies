import axios from 'axios'

const movieURL = 'http://localhost:8080/movie'

export const getUpcoming = () => axios.get(`${movieURL}/upcoming`)
export const getTrending = () => axios.get(`${movieURL}/trending`)
export const getMovie = id => axios.get(`${movieURL}/details/${id}`)
export const getTitleSearch = search => axios.get(`${movieURL}/search/title/${search}`)