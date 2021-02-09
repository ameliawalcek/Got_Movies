import { ERROR, UPCOMING } from "../constants/constants"

export const reducer = (state, action) => {
    console.log(action.payload)
    console.log(state.movies)
    switch (action.type) {
        case UPCOMING:
            return {
                ...state,
                loading: false,
                movies: {
                    ...state.movies,
                    upcoming: action.payload,
                },
                error: ''
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