import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BreweryUI from "../components/BreweryUI"

function Brewery(props) {

    const [thisBrewery, setThisBrewery] = useState({})
    const id = useParams().id
    
    useEffect(() => {
            if (props.breweries.length > 0) {
                setThisBrewery(props.breweries.find(element => element.id === id))
            } else callAPI()
        }, [])

    function callAPI() {
        fetch(`https://api.openbrewerydb.org/breweries/${id}`)
            .then(response => response.json())
            .then(data => {setThisBrewery(data)})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const params = `${props.user}/${id}/${thisBrewery.name}/${thisBrewery.city}/${thisBrewery.state}`
        fetch('http://localhost:4000/add-brewery/' + params, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        })
    }

    return(
        <BreweryUI handleSubmit={handleSubmit} thisBrewery={thisBrewery} />
    )

}

export default Brewery