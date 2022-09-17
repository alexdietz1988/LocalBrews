import { backend } from './apis'

export function addToMyList(user, thisBrewery) {
    return backend.post('brewery/', { user, ...thisBrewery })
}

export function fetchMyList(user) {
    return backend.get(`logs/my-list/${user}`)
}