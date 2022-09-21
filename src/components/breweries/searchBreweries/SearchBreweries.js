import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SearchBreweriesForm from './SearchBreweriesForm'
import { searchBreweries } from '../../../actions/breweries'

function SearchBreweries(props) {
    function renderSearchResults() {
        return(
            <section>
                <h3 className='mb-3'>Breweries in {props.location}</h3>
                {props.breweries.map(brewery => (
                    <Link to={`/breweries/${brewery.id}`} key={brewery.id}>
                        <p>{brewery.name}</p>
                    </Link>
                ))}
            </section>
        )
    }

    return(
        <>
            <h2 className='mb-4'>Brewery Search</h2>
            <SearchBreweriesForm onSubmit={(formData) => props.searchBreweries(formData)}/>
            {props.breweries.length > 0 ? renderSearchResults() : null}
        </>
    )
}

function mapStateToProps(state) {
    return {
        breweries: state.breweries.searchResults.data,
        location: state.breweries.searchResults.location
    }
}

export default connect(mapStateToProps, { searchBreweries })(SearchBreweries)