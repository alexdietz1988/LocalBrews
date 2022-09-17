import { FETCH_BREWERY, FETCH_BREWERY_LOG, FETCH_BREWERIES, SEARCH_BREWERIES, ADD_BREWERY, REMOVE_BREWERY } from '../actions/types'

const breweriesDefault = {
    myList: [],
    searchResults: [],
    breweryLog: [],
    selectedBrewery: {},
    fetchCount: 0
}

function breweriesReducer(breweries = breweriesDefault, action) {
    switch (action.payload) {
        case SEARCH_BREWERIES:
            return { ...breweries, searchResults: action.payload, fetchCount: fetchCount + 1 }
        case FETCH_BREWERY:
            return { ...breweries, selectedBrewery: action.payload, fetchCount: fetchCount + 1 }
        case ADD_BREWERY:
            return { ...breweries, fetchCount: fetchCount + 1 }
        case REMOVE_BREWERY:
            return { ...breweries, fetchCount: fetchCount + 1 }
        case FETCH_BREWERIES:
            return { ...breweries, myList: action.payload, fetchCount: fetchCount + 1 }
        case FETCH_BREWERY_LOG:
            return { ...breweries, breweryLog: action.payload, fetchCount: fetchCount + 1}
    }
}

export default breweriesReducer