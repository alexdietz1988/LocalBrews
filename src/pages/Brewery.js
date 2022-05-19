import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BreweryInfo from "../components/brewery/BreweryInfo"
import BreweryBeerLog from "../components/brewery/BreweryBeerLog"
import LogBeer from "../components/brewery/LogBeer"
import AddOrRemove from "../components/brewery/AddOrRemove"

function Brewery(props) {

    const brewery_id = useParams().id

    const [thisBrewery, setThisBrewery] = useState({
        'username': props.username,
        'brewery_id': brewery_id,
        'name': '',
        'location': '',
        'street': '',
        'url': ''
    })

    function getBreweryInfo() {
        fetch(props.openBrewery + brewery_id)
            .then(response => response.json())
            .then(data => {
                setThisBrewery(
                    {
                        'username': props.username,
                        'brewery_id': brewery_id,
                        'name': data.name,
                        'location': `${data.city}, ${data.state}`,
                        'street': data.street,
                        'url': data.website_url
                    })})
    }

    useEffect(() => {getBreweryInfo()}, [])

    return(
        <>
            <section className='mb-5'>
                <BreweryInfo thisBrewery={thisBrewery} />
                <AddOrRemove thisBrewery={thisBrewery} username={props.username} backend={props.backend}/>
            </section>

            <section>
                <LogBeer thisBrewery={thisBrewery} username={props.username} brewery_id={brewery_id} backend={props.backend} />
                <BreweryBeerLog thisBrewery={thisBrewery} username={props.username} brewery_id={brewery_id} backend={props.backend} />
            </section>
        </>
    )
}

export default Brewery