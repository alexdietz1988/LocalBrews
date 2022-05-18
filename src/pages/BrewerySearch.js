import { useState } from "react"
import SearchForm from "../components/SearchForm"
import SearchResults from "../components/SearchResults"

function BrewerySearch(props) {

    const [location, setLocation] = useState({city: '', state: ''})

    function searchByCity() {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${location.city}&by_state=${location.state}`)
            .then(response => response.json())
            .then(data => props.setBreweries(data) )
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
            {props.breweries ? <SearchResults breweries={props.breweries}/> : null}
        </>
    )
}

export default BrewerySearch