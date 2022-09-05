import axios from 'axios'

const backend = 'https://alexdietz-localbrews-backend.herokuapp.com/'
// const backend = 'http://localhost:4000/'

export function requestBeerLog(user) {
    return axios.get(backend + `logs/beer-log/${user}/`)
}

export function requestDeleteBeer(id) {
    return axios.delete(backend + `logs/beer/${id}`)
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

export function requestBreweryBeerLog(user, breweryId) {
    return axios.get(backend + `logs/beer-log/${user}/${breweryId}`)
}