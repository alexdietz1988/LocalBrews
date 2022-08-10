import { useState } from "react"
import axios from "axios"
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"

function Search({ openBrewery }) {

    const [breweries, setBreweries] = useState([])
    const [location, setLocation] = useState({city: '', state: ''})

    function searchByCity() {
        axios.get(openBrewery, {
            params: {
                by_city: location.city,
                by_state: location.state,
                per_page: 50
            }
        })
            .then(({ data }) => setBreweries(data))
            .catch((error) => console.log(error))
    }

    function handleChange(e) {
        setLocation((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        searchByCity()
    }

    return(
        <>
            <h2 className='mb-4'>Brewery Search</h2>
            <SearchForm location={location} handleChange={handleChange} handleSubmit={handleSubmit}/>
            {breweries.length > 0 ? <SearchResults breweries={breweries}/> : null}
        </>
    )
}

export default Search