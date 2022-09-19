import { backend } from '../apis'
import { LOGIN, LOGOUT } from './types'

export const login = (page, formData) => async dispatch => {
    console.log(page, formData)
    const response = (page === 'login') ?
        await backend.post('auth/login', formData) :
        await backend.post('auth', formData)
    console.log(response)
    let payload = { success: true }
    response.data.success ?
        payload.user = formData.user :
        payload.success = false
        payload.errorMessage = response.data.errorMessage
    console.log(payload)
    dispatch({ type: LOGIN, payload })
}

export const logout = () => {
    return { type: LOGOUT }
}