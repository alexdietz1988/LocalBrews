import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import BreweryUI from "../components/BreweryUI"
import LogBeer from "../components/LogBeer"

function Brewery(props) {

    const [thisBrewery, setThisBrewery] = useState({})
    const id = useParams().id
    
    useEffect(() => {getBrewery()}, [])

    function getBrewery() {
        fetch(`https://api.openbrewerydb.org/breweries/${id}`)
            .then(response => response.json())
            .then(data => {
                setThisBrewery(
                    {
                        'username': props.user,
                        'brewery_id': data.id,
                        'name': data.name,
                        'location': `${data.city}, ${data.state}`,
                        'street': data.street,
                        'url': data.website_url
                    })})
    }

    function addToMyList(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/brewery/', {thisBrewery})
    }

    function removeFromMyList(e) {
        e.preventDefault()
        axios.delete(`http://localhost:4000/brewery/${props.user}/${thisBrewery.brewery_id}`)
    }

    return(
        <>
            <BreweryUI thisBrewery={thisBrewery} addToMyList={addToMyList} removeFromMyList={removeFromMyList}/>
            <LogBeer thisBrewery={thisBrewery} />
        </>
    )
}

export default Brewery