import { backend } from './apis'

export function signup(user, password) {
    return backend.post('auth', { user, password })
}

export function login(user, password) {
    return backend.post('auth/login', { user, password })
}