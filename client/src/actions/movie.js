import * as api from '../api'
import { ERROR, UPCOMING } from '../constants/constants'

export const getUpcoming = () => async (dispatch) => {
    try {
        let { data } = await api.getUpcoming()
        // return data
        dispatch({ type: UPCOMING, payload: data })


    } catch (error) {
        dispatch({ type: ERROR, payload: error })
    }
}