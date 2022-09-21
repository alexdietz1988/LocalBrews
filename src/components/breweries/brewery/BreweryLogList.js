import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBeers, deleteBeer } from '../../../actions/beers'

function BreweryLogList(props) {
    useEffect(() => {props.fetchBeers()}, [])

    const renderBeers = props.beers.map((beer, idx) => (
        <div key={idx} className='mb-3'>
            <p>
                <b>{beer.name}</b><br />
                <i>Style:</i> {beer.style}<br />
                <i>Your Rating:</i> {beer.rating}
            </p>
            <button className="btn btn-warning" onClick={() => props.deleteBeer(beer)}>
                Remove Beer
            </button>
        </div>
    ))

    return(
        <>
        <h4>Beers Logged</h4>
        {props.beers.length > 0 ? <>{renderBeers}</> : `You haven't logged any beers from this brewery yet!`}
        </>
    )
}

function mapStateToProps(state, ownProps) {
    const { id } = ownProps
    let beers = state.beers
    beers = beers.filter((beer) => beer.breweryId === id)
    return { beers }
}

export default connect(mapStateToProps, { deleteBeer, fetchBeers })(BreweryLogList)