import axios from 'axios'

const backend = 'https://alexdietz-localbrews-backend.herokuapp.com/'
// const backend = 'http://localhost:4000/'
const openBrewery = 'https://api.openbrewerydb.org/breweries/'

export function requestBrewery(brewery_id) {
    return axios.get(openBrewery + brewery_id)
}

export function requestRemoveBrewery(user, id) {
    return axios.delete(backend + `brewery/${user}/${id}`)
}