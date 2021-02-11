import * as api from '../api'
import { ERROR, MOVIE, SEARCH, TRENDING, UPCOMING } from '../constants/constants'

export const getUpcoming = async (dispatch) => {
    try {
        let { data } = await api.getUpcoming()
        dispatch({ type: UPCOMING, payload: data })

    } catch (error) {
        dispatch({ type: ERROR, payload: error })
    }
}

export const getMovie = async (id, dispatch) => {
    try {
        let { data } = await api.getMovie(id)
        dispatch({ type: MOVIE, payload: data })

    } catch (error) {
        dispatch({ type: ERROR, payload: error })
    }
}

export const getTrending = async (dispatch) => {
    try {
        let { data } = await api.getTrending()
        dispatch({ type: TRENDING, payload: data })

    } catch (error) {
        dispatch({ type: ERROR, payload: error })
    }
}

export const setSearch = async (data, dispatch) => {
    try {
        dispatch({ type: SEARCH, payload: data })

    } catch (error) {
        dispatch({ type: ERROR, payload: error })

    }
}

export const getTitleSearch = async (search, dispatch) => {
    try {
        const { data } = api.getTitleSearch(search)
        dispatch({ type: SEARCH, payload: data })

    } catch (error) {
        dispatch({ type: ERROR, payload: error })

    }
}