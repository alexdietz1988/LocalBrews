import { combineReducers } from 'redux'
import authReducer from './authReducer'
import breweriesReducer from './breweriesReducer'

export default combineReducers({
    auth: authReducer,
    breweries: breweriesReducer
})