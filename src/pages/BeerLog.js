import { useState, useEffect } from "react"

function BeerLog(props) {
    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        fetch(`http://localhost:4000/logs/beer-log/${props.username}/`)
            .then(response => response.json())
            .then(data => setBeerLog(data))
    }

    useEffect(() => {getBeerLog()}, [])

    function loaded() {
        return(
            <section>
                {beerLog.map(beer => (
                    <div key={beer.id}>
                        <p>
                            <b>{beer.name}</b><br />
                            <i>Brewery:</i> {beer.brewery_name}<br />
                            <i>Style:</i> {beer.style}<br />
                            <i>Your Rating:</i> {beer.rating}
                        </p>
                    </div>
                ))}
            </section>
        )
    }

    if (beerLog.length > 0) {
        return(
            <>
            <h4 className='mb-4'>Beers Logged</h4>
            {beerLog ? loaded() : <p>Loading...</p>}
            </>
        )
    }
    
}

export default BeerLog