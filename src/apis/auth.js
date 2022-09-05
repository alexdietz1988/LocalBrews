import axios from 'axios'

const backend = 'https://alexdietz-localbrews-backend.herokuapp.com/'
// const backend = 'http://localhost:4000/'

export function requestSignup(user, password) {
    return axios.post(backend + 'auth', {
        username: user,
        password: password
        })
}

export function requestLogin(user, password) {
    return axios.post(backend + 'auth/login', {
        username: user,
        password: password
        })
}