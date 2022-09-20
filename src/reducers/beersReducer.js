import { ADD_BEER, FETCH_BEERS, DELETE_BEER } from '../actions/types'

function beersReducer(beers = {data: [], fetchCount: 0}, action) {
    let newFetchCount = beers.fetchCount + 1
    switch (action.type) {
        case ADD_BEER:
            return { 
                data: [...beers.data, action.payload],
                fetchCount: newFetchCount
            }
        case DELETE_BEER:
            return { 
                data: beers.data.filter(beer => !(beer.name === action.payload.name && beer.breweryId === action.payload.breweryId)),
                fetchCount: beers.fetchCount + 1
            }
        case FETCH_BEERS:
            return { data: action.payload.data, fetchCount: newFetchCount
            }
    }
    return beers
}

export default beersReducer