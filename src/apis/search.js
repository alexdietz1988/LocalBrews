import { openBrewery } from './apis'

export function requestSearch(location) {
    return openBrewery.get({
        params: {
            by_city: location.city,
            by_state: location.state,
            per_page: 50
        }
    })
}