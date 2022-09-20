import axios from 'axios'

import { backend, openBrewery } from '../apis'
import { FETCH_BREWERY, FETCH_BREWERY_LOG, FETCH_BREWERIES,
    SEARCH_BREWERIES, ADD_BREWERY, DELETE_BREWERY,
    CHECK_MY_LIST, TOGGLE_IN_MY_LIST } from './types'

export const fetchBrewery = id => async dispatch => {
    const response = await openBrewery.get(id)
    dispatch({ type: FETCH_BREWERY, payload: response.data })
}

export const addBrewery = brewery => async (dispatch, getState) => {
    const user = getState().auth.user
    let newBrewery = {
        user,
        brewery_id: brewery.id,
        name: brewery.name,
        location: `${brewery.city}, ${brewery.state}`,
        street: brewery.street,
        url: brewery.website_url
    }
    const response = await backend.post('breweries/', newBrewery)
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
    const response = await axios.get('https://api.openbrewerydb.org/breweries/', {
        params: {
            by_city: location.city,
            by_state: location.state,
            per_page: 50
        }})
    dispatch({ type: SEARCH_BREWERIES, payload: response.data })
}

export const checkMyList = id => async (dispatch, getState) => {
    const user = getState().auth.user
    let myList = await backend.get(`breweries/${user}`)
    myList = myList.data.data
    const inMyList = myList.some(element => element.brewery_id === id)
    dispatch({type: CHECK_MY_LIST, payload: inMyList})
}

export const toggleInMyList = () => {
    return { type: TOGGLE_IN_MY_LIST }
}