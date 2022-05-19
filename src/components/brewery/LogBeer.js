import axios from "axios"
import { useState } from "react"
import LogBeerForm from "./LogBeerForm"

function LogBeer(props) {

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
        axios.post('http://localhost:4000/logs/beer', {
            username: beer.username,
            brewery_id: beer.brewery_id,
            brewery_name: props.thisBrewery.name,
            brewery_location: props.thisBrewery.location,

            name: beer.name,
            style: beer.style,
            rating: beer.rating
        })
    }

    return (
        <>
            <h4 className='mb-4'>Log a Beer from This Brewery</h4>
            <LogBeerForm beer={beer} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </>
    )
}

export default LogBeer