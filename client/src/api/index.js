import axios from 'axios'

const movieURL = 'http://localhost:8080/movie'

export const getUpcoming = page => axios.get(`${movieURL}/upcoming/${page}`)
export const getTrending = page => axios.get(`${movieURL}/trending/${page}`)
export const getMovie = id => axios.get(`${movieURL}/details/${id}`)
export const getTitleSearch = search => axios.get(`${movieURL}/search/title/${search}`)