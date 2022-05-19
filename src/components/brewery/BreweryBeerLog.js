import axios from "axios"
import { useState, useEffect } from "react"
import BreweryBeerLogForm from "./BreweryBeerLogForm"
import BreweryBeerLogList from "./BreweryBeerLogList"

function BreweryBeerLog(props) {

    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        fetch(props.backend + `logs/beer-log/${props.username}/${props.brewery_id}`)
            .then(response => response.json())
            .then(data => setBeerLog(data))
    }

    useEffect(() => {getBeerLog()}, [])

    const [beer, setBeer] = useState({
        username: props.username,
        brewery_id: props.brewery_id,
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
        axios.post(props.backend + 'logs/beer', {
            username: beer.username,
            brewery_id: beer.brewery_id,
            brewery_name: props.thisBrewery.name,
            brewery_location: props.thisBrewery.location,

            name: beer.name,
            style: beer.style,
            rating: beer.rating
        })
        getBeerLog()
    }

    function removeBeer(e) {
        e.preventDefault()
        axios.delete(props.backend + `logs/beer/${e.target.name}`)
        getBeerLog()
    }

    return (
        <>
            <BreweryBeerLogForm beer={beer} handleChange={handleChange} handleSubmit={handleSubmit} />
            <BreweryBeerLogList beerLog={beerLog} removeBeer={removeBeer} />
        </>
    )
}

export default BreweryBeerLog