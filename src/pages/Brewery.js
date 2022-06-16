import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BreweryInfo from "../components/brewery/BreweryInfo"
import BreweryBeerLog from "../components/brewery/BreweryBeerLog"
import MyListButtons from "../components/brewery/MyListButtons"

function Brewery(props) {

    const brewery_id = useParams().id

    const [thisBrewery, setThisBrewery] = useState({
        'username': props.user,
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
                        'username': props.user,
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
                <MyListButtons thisBrewery={thisBrewery} user={props.user} backend={props.backend}/>
            </section>

            <BreweryBeerLog thisBrewery={thisBrewery} user={props.user} brewery_id={brewery_id} backend={props.backend} />
        </>
    )
}

export default Brewery