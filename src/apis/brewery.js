import { backend, openBrewery } from './apis'

export function requestBrewery(brewery_id) {
    return openBrewery.get(brewery_id)
}

export function requestRemoveBrewery(user, id) {
    return backend.delete(`brewery/${user}/${id}`)
}