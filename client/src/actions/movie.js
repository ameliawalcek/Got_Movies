import * as api from '../api'

export const getUpcoming = () => async (dispatch) => {
    try {
        let { data } = await api.getUpcoming()

        console.log('finding upcoming', data)
        // dispatch({ type: UPCOMING, payload: data })

    } catch (error) {
        console.log(error)
    }
}