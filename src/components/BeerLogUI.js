import { Link } from "react-router-dom"

function BeerLogUI(props) {
    return(
        <section>
            <h4 className='mb-4'>Beers Logged</h4>
            {props.beerLog.map(beer => (
                <div key={beer._id} className='mb-2'>
                    <p>
                        <b>{beer.name}</b><br />
                        <i>Brewery:</i> <Link to={`/brewery/${beer.brewery_id}`}>{beer.brewery_name}</Link>, {beer.brewery_location}<br />
                        <i>Style:</i> {beer.style}<br />
                        <i>Your Rating:</i> {beer.rating}
                    </p>

                    <form name={beer._id} onSubmit={props.removeBeer}>
                        <button className="btn btn-warning">Remove Beer</button>
                    </form>
                </div>
            ))}
        </section>
    )
}

export default BeerLogUI