import { combineReducers } from 'redux'
import authReducer from './authReducer'
import breweriesReducer from './breweriesReducer'
import beersReducer from './beersReducer'

export default combineReducers({
    auth: authReducer,
    breweries: breweriesReducer,
    beers: beersReducer
})