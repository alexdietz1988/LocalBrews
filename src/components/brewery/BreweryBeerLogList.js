function BreweryBeerLogList(props) {
    return(
        <section>
            <h4>Beers Logged</h4>
            {props.beerLog.map((beer, idx) => (
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
            ))}
        </section>
    )
}

export default BreweryBeerLogList