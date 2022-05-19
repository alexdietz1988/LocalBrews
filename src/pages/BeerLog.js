import { useState, useEffect } from "react"
import axios from "axios"
import BeerLogUI from "../components/BeerLogUI"

function BeerLog(props) {
    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        fetch(`https://alexdietz-localbrews-backend.herokuapp.com/logs/beer-log/${props.username}/`)
            .then(response => response.json())
            .then(data => {setBeerLog(data)})
    }

    useEffect(() => {getBeerLog()}, [])

    function removeBeer(e) {
        e.preventDefault()
        axios.delete(`https://alexdietz-localbrews-backend.herokuapp.com/logs/beer/${e.target.name}`)
    }

    return <BeerLogUI beerLog={beerLog} removeBeer={removeBeer}/>
}

export default BeerLog