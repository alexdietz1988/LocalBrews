import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import BreweryBeerLog from "./BreweryBeerLog"
import MyListButtons from "./MyListButtons"
import axios from "axios"

function Brewery({user, openBrewery, backend}) {

    const brewery_id = useParams().id

    const [thisBrewery, setThisBrewery] = useState({
        'username': user,
        'brewery_id': brewery_id,
        'name': '',
        'location': '',
        'street': '',
        'url': ''
    })

    function getBreweryInfo() {
        axios.get(openBrewery + brewery_id)
            .then(({ data }) => {
                setThisBrewery(
                    {
                        'username': user,
                        'brewery_id': brewery_id,
                        'name': data.name,
                        'location': `${data.city}, ${data.state}`,
                        'street': data.street,
                        'url': data.website_url
                    }
                )})
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBreweryInfo()}, [])

    function BreweryInfo() {
        return(
            <>
            <h2 className='mb-4'>{thisBrewery.name}</h2>
                <section>
                    <p>{thisBrewery.street}<br />{thisBrewery.location}</p>
                    <p><a href={thisBrewery.url} target='_blank' rel='noreferrer'>Website</a></p>
                </section>
            </>
        )
    }

    if (user === '') {
        return(
            <>
            <section className='mb-5'>
                {BreweryInfo()}
            </section>

            <Link to='/signup'>Sign up</Link> or <Link to='/login'>log in</Link> to save this brewery or log one of its beers!

        </>
        )
    }

    return(
        <>
            <section className='mb-5'>
                {BreweryInfo()}
                <MyListButtons thisBrewery={thisBrewery} user={user} backend={backend}/>
            </section>

            <BreweryBeerLog thisBrewery={thisBrewery} user={user} brewery_id={brewery_id} backend={backend} />
        </>
    )
}

export default Brewery