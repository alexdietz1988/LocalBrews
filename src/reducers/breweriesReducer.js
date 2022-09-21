import { FETCH_BREWERY, FETCH_BREWERIES, SEARCH_BREWERIES,
    ADD_BREWERY, DELETE_BREWERY } from '../actions/types'

let breweriesDefault = {
    myList: [],
    searchResults: {data: [], location: ''},
    selectedBrewery: {}
}

function breweriesReducer(breweries = breweriesDefault, action) {
    switch (action.type) {
        case SEARCH_BREWERIES:
            return {
                ...breweries,
                searchResults: {
                    data: action.payload.data,
                    location: action.payload.location
                }
            }
        case FETCH_BREWERY:
            return { ...breweries, selectedBrewery: action.payload }
        case ADD_BREWERY:
            return {
                ...breweries,
                myList: [...breweries.myList, action.payload]
            }
        case DELETE_BREWERY:
            return {
                ...breweries,
                myList: breweries.myList.filter(brewery => 
                    brewery.breweryId !== action.payload
                    )
            }
        case FETCH_BREWERIES:
            return { ...breweries, myList: action.payload }
    }
    return breweries
}

export default breweriesReducer