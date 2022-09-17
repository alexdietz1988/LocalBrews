import { backend } from './apis'

export function requestSignup(user, password) {
    return backend.post('auth', { user, password })
}

export function requestLogin(user, password) {
    return backend.post('auth/login', { user, password })
}