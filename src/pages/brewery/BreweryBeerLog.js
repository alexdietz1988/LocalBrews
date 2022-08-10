import axios from "axios"
import { useState, useEffect } from "react"
import BreweryBeerLogForm from "./BreweryBeerLogForm"
import BreweryBeerLogList from "./BreweryBeerLogList"

function BreweryBeerLog({user, brewery_id, backend, thisBrewery}) {

    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        setBeerLog([])
        axios.get(backend + `logs/beer-log/${user}/${brewery_id}`)
            .then(({ data }) => setBeerLog(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBeerLog()}, [])

    const [beer, setBeer] = useState({
        username: user,
        brewery_id: brewery_id,
        name: '',
        style: '',
        rating: ''
    })

    function handleChange(e) {
        setBeer((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(backend + 'logs/beer', {
            username: beer.username,
            brewery_id: beer.brewery_id,
            brewery_name: thisBrewery.name,
            brewery_location: thisBrewery.location,

            name: beer.name,
            style: beer.style,
            rating: beer.rating
            })
            .then(() => getBeerLog())
            .catch((error) => console.log(error))
    }

    function removeBeer(id) {
        axios.delete(backend + `logs/beer/${id}`)
            .then(() => getBeerLog())
            .catch((error) => console.log(error))
    }

    return (
        <>
            <BreweryBeerLogForm beer={beer} handleChange={handleChange} handleSubmit={handleSubmit} />
            <BreweryBeerLogList beerLog={beerLog} removeBeer={removeBeer}/>
        </>
    )
}

export default BreweryBeerLog