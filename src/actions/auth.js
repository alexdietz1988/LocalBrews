import { backend } from '../apis'
import { LOGIN, LOGOUT } from './types'

export const login = (page, formData) => async dispatch => {
    const response = (page === 'login') ?
        await backend.post('auth/login', formData) :
        await backend.post('auth', formData)
    let payload = { success: true }
    response.data.success ?
        payload.user = formData.user :
        payload.success = false
        payload.errorMessage = response.data.errorMessage
    dispatch({ type: LOGIN, payload })
}

export const logout = () => {
    return { type: LOGOUT }
}