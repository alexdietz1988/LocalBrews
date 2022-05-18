import axios from "axios"
import { useState } from "react"
import LogBeerForm from "./LogBeerForm"

function LogBeer(props) {

    const [beer, setBeer] = useState({
        username: '',
        brewery_name: '',
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
        setBeer((prevState) => ({
            ...prevState,
            username: props.username,
            brewery_name: props.thisBrewery.name,
        }))
        axios.post('http://localhost:4000/logs/beer', {beer})
    }

    return (
        <>
            <h4>Log a Beer from This Brewery</h4>
            <LogBeerForm beer={beer} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </>
    )
}

export default LogBeer