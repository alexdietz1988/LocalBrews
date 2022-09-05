import axios from 'axios'

const openBrewery = 'https://api.openbrewerydb.org/breweries/'

export function requestSearch(location) {
    return axios.get(openBrewery, {
        params: {
            by_city: location.city,
            by_state: location.state,
            per_page: 50
        }
    })
}