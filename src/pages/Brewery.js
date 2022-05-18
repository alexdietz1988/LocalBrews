import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
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

    function addToMyList(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/brewery/', {
            username: 'alex',
            brewery_id: 'something',
            name: 'another brewery',
            location: `City, State`,
        })
    }

    function removeFromMyList(e) {
        e.preventDefault()
        fetch(`http://localhost:4000/brewery/:${id}?_method=DELETE`)
    }

    return(
        <BreweryUI addToMyList={addToMyList} thisBrewery={thisBrewery} />
    )

}

export default Brewery