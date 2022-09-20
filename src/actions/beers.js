import { backend } from '../apis'
import { FETCH_BEERS, ADD_BEER, DELETE_BEER } from './types'

export const fetchBeers = () => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await backend.get(`beers/${user}/`)
    if (response.data.success) {
        dispatch({ type: FETCH_BEERS, payload: response.data.data })
    }
}

export const addBeer = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    let brewery = getState().breweries.selectedBrewery
    brewery = brewery.data
    const newBeer = { 
        user,
        brewery_id: brewery.id,
        brewery_name: brewery.name,
        brewery_location: `${brewery.city}, ${brewery.state}`,
        ...formData,
     }
    const response = await backend.post('beers/', newBeer)
    if (response.data.success) {
        dispatch({ type: ADD_BEER, payload: newBeer })
    }
}

export const deleteBeer = id => async dispatch => {
    const response = await backend.delete(`beer/${id}`)
    if (response.data.success) {
        dispatch({ type: DELETE_BEER })
    }
}