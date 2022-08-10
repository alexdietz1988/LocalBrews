import { useState, useEffect } from "react"
import axios from "axios"
import BeerLogUI from "./BeerLogUI"

function BeerLog(props) {
    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        axios.get(props.backend + `logs/beer-log/${props.user}/`)
            .then(({ data }) => setBeerLog(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => getBeerLog(), [])

    function removeBeer(e) {
        e.preventDefault()
        axios.delete(props.backend + `logs/beer/${e.target.name}`)
            .then(() => getBeerLog())
            .catch((error) => console.log(error))
    }

    return(
        <>
            <BeerLogUI beerLog={beerLog} removeBeer={removeBeer}/>
        </>
    )
}

export default BeerLog