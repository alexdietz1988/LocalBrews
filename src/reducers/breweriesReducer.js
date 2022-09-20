import { FETCH_BREWERY, FETCH_BREWERIES, SEARCH_BREWERIES,
    ADD_BREWERY, DELETE_BREWERY } from '../actions/types'

let breweriesDefault = {
    myList: [],
    searchResults: [],
    selectedBrewery: {}
}

function breweriesReducer(breweries = breweriesDefault, action) {
    switch (action.type) {
        case SEARCH_BREWERIES:
            return { ...breweries, searchResults: action.payload }
        case FETCH_BREWERY:
            return { ...breweries, selectedBrewery: action.payload }
        case ADD_BREWERY:
            return breweries
        case DELETE_BREWERY:
            return breweries
        case FETCH_BREWERIES:
            return { ...breweries, myList: action.payload }
    }
    return breweries
}

export default breweriesReducer