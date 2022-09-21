import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBeer, fetchBeers } from '../actions/beers'

function Beers(props) {
    useEffect(() => {props.fetchBeers()},[])

    const renderBeers = props.beers.map(beer => (
        <div key={beer._id} className='mb-4'>
            <p>
                <b>{beer.name}</b><br />
                <i>Brewery:</i> <Link to={`/brewery/${beer.brewery_id}`}>{beer.brewery_name}</Link><br />
                <i>Location:</i> {beer.brewery_location}<br />
                <i>Style:</i> {beer.style}<br />
                <i>Your Rating:</i> {beer.rating}
            </p>
            <button className='btn btn-warning' onClick={() => props.deleteBeer(beer)}>Remove Beer</button>
        </div>
    ))

    return(
        <section>
            <h2 className='mb-4'>My Beers</h2>
            {renderBeers.length > 0 ?
                renderBeers :
                <h4><Link to='/breweries/search'>Find a brewery</Link> to log beers you've tried!</h4>
            }
        </section>
    )
}

function mapStateToProps(state) {
    return { beers: state.beers }
}

export default connect(mapStateToProps, { deleteBeer, fetchBeers })(Beers)