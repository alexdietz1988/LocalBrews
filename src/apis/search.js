import { openBrewery } from './apis'

export function searchBreweries(location) {
    return openBrewery.get({
        params: {
            by_city: location.city,
            by_state: location.state,
            per_page: 50
        }
    })
}