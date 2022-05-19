import { useState } from "react"
import SearchForm from "../components/search/SearchForm"
import SearchResults from "../components/search/SearchResults"

function Search(props) {

    const [breweries, setBreweries] = useState([])
    const [location, setLocation] = useState({city: '', state: ''})

    function searchByCity() {
        fetch(props.openBrewery + `?by_city=${location.city}&by_state=${location.state}`)
            .then(response => response.json())
            .then(data => {setBreweries(data)})
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
            {breweries ? <SearchResults breweries={breweries}/> : null}
        </>
    )
}

export default Search