import { combineReducers } from 'redux'

function userReducer(user = null, action) {
    if (action.type === 'SET_USER') return action.payload
    return user
}

combineReducers({
    user: userReducer
})