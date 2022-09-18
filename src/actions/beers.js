import { backend } from '../apis'
import { FETCH_BEERS, ADD_BEER, REMOVE_BEER } from './types'

export const fetchBeerLog = () => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.get(`beers/${user}/`)
    if (response.data.success) {
        dispatch({ type: FETCH_BEERS, payload: response.data.data })
    }
}

export const addBeer = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.post('beers/', { user, formData })
    if (response.data.success) {
        dispatch({ type: ADD_BEER })
    }
}

export const removeBeer = id => async dispatch => {
    const response = await backend.delete(`beer/${id}`)
    if (response.data.success) {
        dispatch({ type: REMOVE_BEER })
    }
}