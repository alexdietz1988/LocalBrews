import { useState, useEffect } from "react"
import axios from "axios"
import BeerLogUI from "./BeerLogUI"

function BeerLog(props) {
    const [beerLog, setBeerLog] = useState([])
    const [removeBeerFeedback, setRemoveBeerFeedback] = useState(false)

    function getBeerLog() {
        fetch(props.backend + `logs/beer-log/${props.user}/`)
            .then(response => response.json())
            .then(data => {setBeerLog(data)})
    }

    useEffect(() => {getBeerLog()}, [])

    function removeBeer(e) {
        e.preventDefault()
        axios.delete(props.backend + `logs/beer/${e.target.name}`)
        setRemoveBeerFeedback(true)
    }

    return(
        <>
            <BeerLogUI beerLog={beerLog} removeBeer={removeBeer}/>
            {removeBeerFeedback ? <p>Beer removed!</p> : null}
        </>
    )
}

export default BeerLog