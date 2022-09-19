import { connect } from 'react-redux'
import { deleteBeer } from '../../../actions/beers'

function BreweryLogList(props) {
    const renderBreweryLog = props.breweryLog.map((beer, idx) => (
        <div key={idx} className='mb-3'>
            <p>
                <b>{beer.name}</b><br />
                <i>Style:</i> {beer.style}<br />
                <i>Your Rating:</i> {beer.rating}
            </p>
            <button className="btn btn-warning" onSubmit={() => props.deleteBeer(beer._id)}>
                Remove Beer
            </button>
        </div>
    ))

    return(
        <>
        <h4>Beers Logged</h4>
        {props.breweryLog.length > 0 ? <>{renderBreweryLog}</> : `You haven't logged any beers from this brewery yet!`}
        </>
    )
}

function mapStateToProps(state) {
    return { breweryLog: state.breweries.breweryLog }
}

export default connect(mapStateToProps, { deleteBeer })(BreweryLogList)