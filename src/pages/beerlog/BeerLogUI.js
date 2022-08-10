import { Link } from "react-router-dom"

function BeerLogUI(props) {

    const mapping = props.beerLog.map(beer => (
        <div key={beer._id} className='mb-4'>
            <p>
                <b>{beer.name}</b><br />
                <i>Brewery:</i> <Link to={`/brewery/${beer.brewery_id}`}>{beer.brewery_name}</Link><br />
                <i>Location:</i> {beer.brewery_location}<br />
                <i>Style:</i> {beer.style}<br />
                <i>Your Rating:</i> {beer.rating}
            </p>
            <button className="btn btn-warning" onClick={() => props.removeBeer(beer._id)}>Remove Beer</button>
        </div>
    ))

    return(
        <section>
            <h2 className='mb-4'>Beer Log</h2>
            {mapping.length > 0 ? mapping : <h4><Link to='/search'>Find a brewery</Link> to log beers you've tried!</h4>}
        </section>
    )
}

export default BeerLogUI