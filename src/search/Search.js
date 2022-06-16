import { useState } from "react"
import SearchForm from "../search/SearchForm"
import SearchResults from "../search/SearchResults"

function Search(props) {

    const [breweries, setBreweries] = useState([])
    const [location, setLocation] = useState({city: '', state: ''})
    const [search, setSearch] = useState(false)

    function searchByCity() {
        fetch(props.openBrewery + `?by_city=${location.city}&by_state=${location.state}&per_page=50`)
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
        setSearch(true)
    }

    return(
        <>
            <h2 className='mb-4'>Brewery Search</h2>
            <SearchForm location={location} handleChange={handleChange} handleSubmit={handleSubmit}/>
            {search ? <SearchResults breweries={breweries}/> : null}
        </>
    )
}

export default Search