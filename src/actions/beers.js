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
        breweryId: brewery.id,
        breweryName: brewery.name,
        breweryLocation: `${brewery.city}, ${brewery.state}`,
        ...formData,
    }
    const response = await backend.post('beers/', newBeer)
    if (response.data.success) {
        dispatch({ type: ADD_BEER, payload: newBeer })
    }
}

export const deleteBeer = beer => async dispatch => {
    const params = {name: beer.name, user: beer.user, breweryId: beer.breweryId}
    const response = await backend.delete('beers/', { params })
    if (response.data.success) {
        dispatch({ type: DELETE_BEER, payload: { name: beer.name, breweryId: beer.breweryId }})
    }
}