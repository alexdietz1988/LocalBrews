import { backend, openBrewery } from './apis'

export function fetchBrewery(brewery_id) {
    return openBrewery.get(brewery_id)
}

export function deleteBrewery(user, id) {
    return backend.delete(`brewery/${user}/${id}`)
}