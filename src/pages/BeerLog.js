import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function BeerLog(props) {
    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        fetch(`http://localhost:4000/logs/beer-log/${props.username}/`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setBeerLog(data)
            })
    }

    useEffect(() => {getBeerLog()}, [])

    function removeBeer(e) {
        e.preventDefault()
        axios.delete(`http://localhost:4000/logs/beer/${e.target.name}`)
    }

    function loaded() {
        return(
            <section>
                {beerLog.map(beer => (
                    <div key={beer._id}>
                        <p>
                            <b>{beer.name}</b><br />
                            <i>Brewery:</i> <Link to={`/brewery/${beer.brewery_id}`}>{beer.brewery_name}</Link>, {beer.brewery_location}<br />
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