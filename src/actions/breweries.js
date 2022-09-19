import { backend, openBrewery } from '../apis'
import { FETCH_BREWERY, FETCH_BREWERY_LOG, FETCH_BREWERIES, SEARCH_BREWERIES, ADD_BREWERY, DELETE_BREWERY } from './types'

export const fetchBrewery = id => async dispatch => {
    const response = await openBrewery.get(id)
    dispatch({ type: FETCH_BREWERY, payload: response.data })
}

export const addBrewery = thisBrewery => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.post('breweries/', { user, ...thisBrewery })
    if (response.data.success) {
        dispatch({ type: ADD_BREWERY })
    }
}

export const fetchBreweries = () => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.get(`breweries/${user}`)
    if (response.data.success) {
        dispatch({ type: FETCH_BREWERIES, payload: response.data.data })
    }
}

export const deleteBrewery = id => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.delete(`breweries/${user}/${id}`)
    if (response.data.success) {
        dispatch({ type: DELETE_BREWERY })
    }
}

export const fetchBreweryLog = id => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.get(`breweries/${user}/${id}`)
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