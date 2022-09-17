import axios from 'axios'

// 'https://alexdietz-localbrews-backend.herokuapp.com/'

export const backend = axios.create({
    baseURL: 'http://localhost:4000/'
})

export const openBrewery = axios.create({
    baseURL: 'https://api.openbrewerydb.org/breweries/'
})