import { ERROR, UPCOMING, MOVIE, TRENDING, SEARCH } from "../constants/constants"

export const reducer = (state, action) => {
    switch (action.type) {
        case UPCOMING:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    upcoming: {
                        page: action.payload.page,
                        total_pages: action.payload.total_pages,
                        results: action.payload.results
                    },
                    currentMovie: {}
                },
                loading: false,
                error: ''
            }
        case TRENDING:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    trending: {
                        page: action.payload.page,
                        total_pages: action.payload.total_pages,
                        results: action.payload.results
                    },
                    currentMovie: {}
                },
                loading: false,
                error: ''
            }
        case MOVIE:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    currentMovie: action.payload
                },
                loading: false,
                error: ''
            }
        case SEARCH:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    search: {
                        page: action.payload.page,
                        total_pages: action.payload.total_pages,
                        results: action.payload.results
                    }
                }
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}