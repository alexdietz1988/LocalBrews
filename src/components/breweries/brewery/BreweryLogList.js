import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteBeer } from '../../../actions/beers'
import { fetchBreweryLog } from '../../../actions/breweries'

function BreweryLogList(props) {
    const id = useParams().id
    useEffect(() => {props.fetchBreweryLog(id)}, [])

    const renderBreweryLog = props.breweryLog.map((beer, idx) => (
        <div key={idx} className='mb-3'>
            <p>
                <b>{beer.name}</b><br />
                <i>Style:</i> {beer.style}<br />
                <i>Your Rating:</i> {beer.rating}
            </p>
            <button className="btn btn-warning" onClick={() => props.deleteBeer(beer.name)}>
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
    return {
        breweryLog: state.breweries.breweryLog,
        fetchCount: state.beers.fetchCount
    }
}

export default connect(mapStateToProps, { deleteBeer, fetchBreweryLog })(BreweryLogList)