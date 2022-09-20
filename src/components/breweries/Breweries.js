import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBreweries, deleteBrewery } from '../../actions/breweries'

function Breweries(props) {
    useEffect(() => {props.fetchBreweries()}, [])

    function loaded() {
        return(
            <section>
                {props.myList.map(brewery => (
                    <div key={brewery._id} className='mb-2'>
                    <Link to={`/breweries/${brewery.breweryId}`}>
                        <p>{brewery.name}, {brewery.location}</p>
                    </Link>
                    <button className='btn btn-warning' onClick={() => props.deleteBrewery(brewery._id)}>Remove Brewery</button>
                    </div>
                ))}
            </section>
        )
    }

    return(
        <>
        <h2 className='mb-4'>My List</h2>
        {props.myList.length > 0 ? loaded() : <h4><Link to='/breweries/search'>Search for some breweries</Link> to add to your list!</h4>}
        </>
    )

}

function mapStateToProps(state) {
    return {
        myList: state.breweries.myList,
        fetchCount: state.breweries.fetchCount
    }
}

export default connect(mapStateToProps, { fetchBreweries, deleteBrewery })(Breweries)