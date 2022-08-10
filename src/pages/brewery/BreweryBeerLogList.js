function BreweryBeerLogList(props) {

    const mapping = props.beerLog.map((beer, idx) => (
        <div key={idx} className='mb-3'>
            <p>
                <b>{beer.name}</b><br />
                <i>Style:</i> {beer.style}<br />
                <i>Your Rating:</i> {beer.rating}
            </p>
        <form name={beer._id} onSubmit={props.removeBeer}>
            <button className="btn btn-warning">Remove Beer</button>
        </form>
        </div>
    ))

    return(
        <>
        <h4>Beers Logged</h4>
        {mapping.length > 0 ? <>{mapping}</> : `You haven't logged any beers from this brewery yet!`}
        </>
    )
}

export default BreweryBeerLogList