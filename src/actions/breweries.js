import { backend, openBrewery } from '../apis'
import { FETCH_BREWERY, FETCH_BREWERY_LOG, FETCH_BREWERIES, SEARCH_BREWERIES, ADD_BREWERY, REMOVE_BREWERY } from './types'

export const fetchBrewery = id => async dispatch => {
    const response = await openBrewery.get(id)
    dispatch({ type: FETCH_BREWERY, payload: response.data })
}

export const addBrewery = thisBrewery => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.post('brewery/', { user, ...thisBrewery })
    if (response.data.success) {
        dispatch({ type: ADD_BREWERY })
    }
}

export const fetchBreweries = () => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.get(`logs/my-list/${user}`)
    if (response.data.success) {
        dispatch({ type: FETCH_BREWERIES, payload: response.data.data })
    }
}

export const removeBrewery = id => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.delete(`brewery/${user}/${id}`)
    if (response.data.success) {
        dispatch({ type: REMOVE_BREWERY })
    }
}

export const fetchBreweryLog = id => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.get(`logs/beer-log/${user}/${id}`)
    if (response.data.success) {
        dispatch({ type: FETCH_BREWERY_LOG, payload: response.data.data })
    }
}

export const searchBreweries = location => async dispatch => {
    const response = await openBrewery.get({
        params: {
            by_city: location.city,
            by_state: location.state,
            per_page: 50
        }
    })
    dispatch({ type: SEARCH_BREWERIES, payload: response.data })
}