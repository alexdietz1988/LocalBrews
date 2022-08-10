function BreweryBeerLogList({beerLog, removeBeer}) {

    const beerLogDisplay = beerLog.map((beer, idx) => (
        <div key={idx} className='mb-3'>
            <p>
                <b>{beer.name}</b><br />
                <i>Style:</i> {beer.style}<br />
                <i>Your Rating:</i> {beer.rating}
            </p>

        <button className="btn btn-warning" onSubmit={() => removeBeer(beer._id)}>Remove Beer</button>
        </div>
    ))

    return(
        <>
        <h4>Beers Logged</h4>
        {beerLog.length > 0 ? <>{beerLogDisplay}</> : `You haven't logged any beers from this brewery yet!`}
        </>
    )
}

export default BreweryBeerLogList