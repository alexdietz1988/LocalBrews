import { Link } from "react-router-dom"

function SearchResults(props) {
    return(
        <section>
            <h3 className='mb-3'>Results</h3>
            {props.breweries.map(brewery => (
                <Link to={`/brewery/${brewery.id}`} key={brewery.id}>
                    <p>{brewery.name}</p>
                </Link>
            ))}
        </section>
    )
}

export default SearchResults