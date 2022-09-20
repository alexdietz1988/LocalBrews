import { ADD_BEER, FETCH_BEERS, DELETE_BEER } from '../actions/types'

function beersReducer(beers = [], action) {
    switch (action.type) {
        case ADD_BEER:
            return [...beers, action.payload]
        case DELETE_BEER:
            return beers.filter(beer => !(beer.name === action.payload.name && beer.breweryId === action.payload.breweryId))
        case FETCH_BEERS:
            return action.payload
    }
    return beers
}

export default beersReducer