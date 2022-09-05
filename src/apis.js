import axios from 'axios'

const backend = 'https://alexdietz-localbrews-backend.herokuapp.com/'
// const backend = 'http://localhost:4000/'
const openBrewery = 'https://api.openbrewerydb.org/breweries/'

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

export function requestBrewery(brewery_id) {
    return axios.get(openBrewery + brewery_id)
}

export function requestAddToMyList(user, thisBrewery) {
    return axios.post(backend + 'brewery/', { 
        'username': user,
        'brewery_id': thisBrewery.brewery_id,
        'name': thisBrewery.name,
        'location': thisBrewery.location,
        'street': thisBrewery.street,
        'url': thisBrewery.url
    })
}

export function requestDelete(user, breweryId) {
    return axios.delete(backend + `brewery/${user}/${breweryId}`)
}

export function requestCheckMyList(user) {
    return axios.get(backend + `logs/my-list/${user}`)
}

export function requestBeerLog(user, breweryId) {
    return axios.get(backend + `logs/beer-log/${user}/${breweryId}`)
}

export function requestLogBeer(user, breweryId, thisBrewery, beer) {
    return axios.post(backend + 'logs/beer', {
        username: user,
        brewery_id: breweryId,
        brewery_name: thisBrewery.name,
        brewery_location: thisBrewery.location,

        name: beer.name,
        style: beer.style,
        rating: beer.rating
        })
}

export function requestDeleteBeer(id) {
    return axios.delete(backend + `logs/beer/${id}`)
}

export function requestMyList(user) {
    return axios.get(backend + `logs/my-list/${user}`)
}

export function requestRemoveBrewery(user, id) {
    return axios.delete(backend + `brewery/${user}/${id}`)
}

export function requestBeerLog(user) {
    return axios.get(backend + `logs/beer-log/${user}/`)
}

export function requestSearch(location) {
    return axios.get(openBrewery, {
        params: {
            by_city: location.city,
            by_state: location.state,
            per_page: 50
        }
    })
}