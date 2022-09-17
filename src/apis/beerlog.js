import { backend } from './apis'

export function fetchBeerLog(user) {
    return backend.get(`logs/beer-log/${user}/`)
}

export function deleteBeer(id) {
    return backend.delete(`logs/beer/${id}`)
}

export function logBeer(user, breweryId, thisBrewery, beer) {
    return backend.post('logs/beer', { 
        user,
        brewery_id: breweryId,
        brewery_name: thisBrewery.name,
        brewery_location: thisBrewery.location,
        ...beer
    })
}

export function fetchBreweryLog(user, breweryId) {
    return backend.get(`logs/beer-log/${user}/${breweryId}`)
}