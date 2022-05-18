import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import BreweryInfo from "../components/brewery/BreweryInfo"
import BreweryBeerLog from "../components/brewery/BreweryBeerLog"
import LogBeer from "../components/brewery/LogBeer"

function Brewery(props) {

    const [thisBrewery, setThisBrewery] = useState({})
    const id = useParams().id
    let inMyList = false

    function checkMyList() {
        fetch(`http://localhost:4000/logs/my-list/${props.username}`)
            .then(response => response.json())
            .then(data => {
                if (data.some(element => element.brewery_id === thisBrewery.brewery_id)) {
                    inMyList = true
                }
            })
    }

    useEffect(() => {
            getBrewery()
            checkMyList()
            },
        [])

    function getBrewery() {
        fetch(`https://api.openbrewerydb.org/breweries/${id}`)
            .then(response => response.json())
            .then(data => {
                setThisBrewery(
                    {
                        'username': props.username,
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
            <BreweryInfo thisBrewery={thisBrewery} inMyList={inMyList} addToMyList={addToMyList} removeFromMyList={removeFromMyList}/>
            <BreweryBeerLog thisBrewery={thisBrewery} username={props.username} />
            <LogBeer username={props.username} thisBrewery={thisBrewery} />
        </>
    )
}

export default Brewery