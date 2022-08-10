import axios from "axios"
import { useState, useEffect } from "react"
import BreweryBeerLogForm from "./BreweryBeerLogForm"
import BreweryBeerLogList from "./BreweryBeerLogList"

function BreweryBeerLog(props) {

    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        setBeerLog([])
        axios.get(props.backend + `logs/beer-log/${props.user}/${props.brewery_id}`)
            .then(({ data }) => setBeerLog(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBeerLog()}, [])

    const [beer, setBeer] = useState({
        username: props.user,
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
            .then(() => getBeerLog())
            .catch((error) => console.log(error))
    }

    function removeBeer(e) {
        e.preventDefault()
        axios.delete(props.backend + `logs/beer/${e.target.name}`)
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