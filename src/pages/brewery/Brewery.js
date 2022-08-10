import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import BreweryInfo from "./BreweryInfo"
import BreweryBeerLog from "./BreweryBeerLog"
import MyListButtons from "./MyListButtons"
import axios from "axios"

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
        axios.get(props.openBrewery + brewery_id)
            .then(({ data }) => {
                setThisBrewery(
                    {
                        'username': props.user,
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

    if (props.user === '') {
        return(
            <>
            <section className='mb-5'>
                <BreweryInfo thisBrewery={thisBrewery} />
                <p><Link to='/signup'>Sign up</Link> or <Link to='/login'>log in</Link> to add this brewery to your list!</p>
            </section>

        </>
        )
    }

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