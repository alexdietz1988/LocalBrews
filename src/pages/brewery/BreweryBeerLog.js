import { useState, useEffect } from "react"
import BreweryBeerLogForm from "./BreweryBeerLogForm"
import BreweryBeerLogList from "./BreweryBeerLogList"
import { requestBeerLog, requestDeleteBeer } from '../../apis'

function BreweryBeerLog({user, brewery_id, backend, thisBrewery}) {

    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        setBeerLog([])
        requestBeerLog(user, brewery_id)
            .then(({ data }) => setBeerLog(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBeerLog()}, [])

    const [beer, setBeer] = useState({
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
        requestLogBeer(user, brewery_id, thisBrewery, beer)
            .then(() => getBeerLog())
            .catch((error) => console.log(error))
    }

    function removeBeer(id) {
        requestDeleteBeer(id)
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