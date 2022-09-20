import { FETCH_BREWERY, FETCH_BREWERIES, SEARCH_BREWERIES,
    ADD_BREWERY, DELETE_BREWERY, CHECK_MY_LIST, TOGGLE_IN_MY_LIST } from '../actions/types'

let breweriesDefault = {
    myList: [],
    searchResults: [],
    selectedBrewery: { data: {}, inMyList: false },
    fetchCount: 0
}

function breweriesReducer(breweries = breweriesDefault, action) {
    let newFetchCount = breweries.fetchCount + 1
    switch (action.type) {
        case SEARCH_BREWERIES:
            return { ...breweries, searchResults: action.payload, fetchCount: newFetchCount }
        case FETCH_BREWERY:
            return { 
                ...breweries,
                selectedBrewery: {data: action.payload, inMyList: false},
                fetchCount: newFetchCount
            }
        case ADD_BREWERY:
            return { ...breweries, fetchCount: newFetchCount }
        case DELETE_BREWERY:
            return { ...breweries, fetchCount: newFetchCount }
        case FETCH_BREWERIES:
            return { ...breweries, myList: action.payload, fetchCount: newFetchCount }
        case CHECK_MY_LIST:
            return {
                ...breweries,
                selectedBrewery: {
                    ...breweries.selectedBrewery,
                    inMyList: action.payload
                }
            }
        case TOGGLE_IN_MY_LIST:
            return {
                ...breweries,
                selectedBrewery: {
                    ...breweries.selectedBrewery,
                    inMyList: !breweries.selectedBrewery.inMyList
                }
            }
    }
    return breweries
}

export default breweriesReducer