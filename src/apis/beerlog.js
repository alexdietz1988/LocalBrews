import { backend } from './apis'

export function requestBeerLog(user) {
    return backend.get(`logs/beer-log/${user}/`)
}

export function requestDeleteBeer(id) {
    return backend.delete(`logs/beer/${id}`)
}

export function requestLogBeer(user, breweryId, thisBrewery, beer) {
    return backend.post('logs/beer', { 
        user,
        brewery_id: breweryId,
        brewery_name: thisBrewery.name,
        brewery_location: thisBrewery.location,
        ...beer
    })
}

export function requestBreweryBeerLog(user, breweryId) {
    return backend.get(`logs/beer-log/${user}/${breweryId}`)
}