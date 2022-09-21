import { LOGIN, LOGOUT } from '../actions/types'

function authReducer(auth = { isSignedIn: false, user: '', errorMessage: '' }, action) {
    switch (action.type) {
        case LOGIN:
            if (action.payload.success) {
                return { isSignedIn: true, user: action.payload.user, errorMessage: '' }
            } else {
                return { ...auth, errorMessage: action.payload.errorMessage}
            }
        case LOGOUT:
            return { isSignedIn: false, user: '', errorMessage: '' }
    }
    return auth
}

export default authReducer