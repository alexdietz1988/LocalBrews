import axios from 'axios'

export const backend = axios.create({
    baseURL: 'https://alexdietz-localbrews-backend.herokuapp.com/'
})

export const openBrewery = axios.create({
    baseURL: 'https://api.openbrewerydb.org/breweries/'
})