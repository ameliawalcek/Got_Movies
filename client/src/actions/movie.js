import * as api from '../api'
import { ERROR, LOADING, MORE, MOVIE, SEARCH, TRENDING, UPCOMING } from '../constants/constants'

export const getUpcoming = async (page, dispatch) => {
    dispatch({type: LOADING})
    try {
        let { data } = await api.getUpcoming(page)
        if (page === 1) {
            dispatch({ type: UPCOMING, payload: data })
        } else {
            dispatch({ type: MORE, payload: data })
        }

    } catch (error) {
        dispatch({ type: ERROR, payload: error })
    }
}

export const getMovie = async (id, dispatch) => {
    dispatch({type: LOADING})
    try {
        let { data } = await api.getMovie(id)
        dispatch({ type: MOVIE, payload: data })

    } catch (error) {
        dispatch({ type: ERROR, payload: error })
    }
}

export const getTrending = async (page, dispatch) => {
    dispatch({type: LOADING})
    try {
        let { data } = await api.getTrending(page)
        if (page === 1) {
            dispatch({ type: TRENDING, payload: data })
        } else {
            dispatch({ type: MORE, payload: data })
        }

    } catch (error) {
        dispatch({ type: ERROR, payload: error })
    }
}

export const setSearch = async (data, dispatch) => {
    dispatch({type: LOADING})
    try {
        dispatch({ type: SEARCH, payload: data })

    } catch (error) {
        dispatch({ type: ERROR, payload: error })

    }
}

export const getTitleSearch = async (search, dispatch) => {
    try {
        const { data } = await api.getTitleSearch(search)
        dispatch({ type: SEARCH, payload: data })

    } catch (error) {
        dispatch({ type: ERROR, payload: error })

    }
}