import { backend } from './apis'

export function requestAddToMyList(user, thisBrewery) {
    return backend.post('brewery/', { user, ...thisBrewery })
}

export function requestMyList(user) {
    return backend.get(`logs/my-list/${user}`)
}