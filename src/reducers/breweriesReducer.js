import { FETCH_BREWERY, FETCH_BREWERY_LOG, FETCH_BREWERIES, SEARCH_BREWERIES,
    ADD_BREWERY, DELETE_BREWERY, CHECK_MY_LIST, TOGGLE_IN_MY_LIST, ADD_BEER, DELETE_BEER } from '../actions/types'

let breweriesDefault = {
    myList: [],
    searchResults: [],
    breweryLog: [],
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
        case FETCH_BREWERY_LOG:
            return { ...breweries, breweryLog: action.payload, fetchCount: newFetchCount}
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
        case ADD_BEER:
            let newBreweryLog = [...breweries.breweryLog, action.payload]
            return {
                ...breweries,
                breweryLog: newBreweryLog
            }
        case DELETE_BEER:
            return {
                ...breweries,
                breweryLog: breweries.breweryLog.filter(beer => {
                    !(
                        beer.name === action.payload.name &&
                        beer.breweryId === action.payload.breweryId
                    )
                })
            }
    }
    return breweries
}

export default breweriesReducer