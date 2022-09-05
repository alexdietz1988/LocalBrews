import { useState } from "react"
import { Link } from "react-router-dom"
import SearchForm from "./SearchForm"
import { requestSearch } from '../../apis'

function Search() {

    const [breweries, setBreweries] = useState([])
    const [location, setLocation] = useState({city: '', state: ''})

    function searchByCity() {
        requestSearch(location)
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

    function SearchResults() {
        return(
            <section>
                <h3 className='mb-3'>Results</h3>
                {breweries.map(brewery => (
                    <Link to={`/brewery/${brewery.id}`} key={brewery.id}>
                        <p>{brewery.name}</p>
                    </Link>
                ))}
            </section>
        )
    }

    return(
        <>
            <h2 className='mb-4'>Brewery Search</h2>
            <SearchForm location={location} handleChange={handleChange} handleSubmit={handleSubmit}/>
            {breweries.length > 0 ? SearchResults() : null}
        </>
    )
}

export default Search