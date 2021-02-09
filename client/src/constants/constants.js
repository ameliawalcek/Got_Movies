export const INITIAL_STATE = {
    loading: true,
    error: '',
    movies: {
        upcoming: {
            results: [],
            page: 0,
            totalPages: 0
        },
        trending: {
            results: [],
            page: 0,
            totalPages: 0
        },
        search: {},
        currentMovie:{}
    }
}

export const ERROR = 'ERROR'
export const UPCOMING = 'UPCOMING'
export const MOVIE = 'MOVIE'
export const TRENDING = 'TRENDING'

export const POSTER_URL = 'https://image.tmdb.org/t/p/original'

export const GENRE_LIST = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
}