import axios from 'axios'

const backend = 'https://alexdietz-localbrews-backend.herokuapp.com/'
// const backend = 'http://localhost:4000/'

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

export function requestMyList(user) {
    return axios.get(backend + `logs/my-list/${user}`)
}