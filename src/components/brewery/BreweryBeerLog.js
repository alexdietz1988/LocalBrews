import { useState, useEffect } from "react"
import axios from "axios"

function BreweryBeerLog(props) {

    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        fetch(props.backend + `logs/beer-log/${props.username}/${props.brewery_id}`)
            .then(response => response.json())
            .then(data => setBeerLog(data))
    }

    useEffect(() => {getBeerLog()}, [])

    function removeBeer(e) {
        e.preventDefault()
        axios.delete(props.backend + `logs/beer/${e.target.name}`)
    }

    function loaded() {
        return(
            <section>
                <h4>Beers Logged</h4>
                {beerLog.map(beer => (
                    <div key={beer._id} className='mb-2'>
                        <p>
                            <b>{beer.name}</b><br />
                            <i>Style:</i> {beer.style}<br />
                            <i>Your Rating:</i> {beer.rating}
                        </p>
                    <form name={beer._id} onSubmit={removeBeer}>
                        <button className="btn btn-warning">Remove Beer</button>
                    </form>
                    </div>
                ))}
            </section>
        )
    }

    return(
        <>
        {beerLog.length > 0 ? loaded() : null}
        </>
    )
}

export default BreweryBeerLog