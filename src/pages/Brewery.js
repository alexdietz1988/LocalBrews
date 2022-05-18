import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BreweryInfo from "../components/brewery/BreweryInfo"
import BreweryBeerLog from "../components/brewery/BreweryBeerLog"
import LogBeer from "../components/brewery/LogBeer"
import AddOrRemove from "../components/brewery/AddOrRemove"

function Brewery(props) {

    const [thisBrewery, setThisBrewery] = useState({
        'username': props.username,
        'brewery_id': '',
        'name': '',
        'location': '',
        'street': '',
        'url': ''
    })
    const id = useParams().id

    return(
        <>
            <section className='mb-5'>
                <BreweryInfo thisBrewery={thisBrewery} setThisBrewery={setThisBrewery} id={id} />
                <AddOrRemove thisBrewery={thisBrewery} username={props.username} />
            </section>

            <section>
                <BreweryBeerLog thisBrewery={thisBrewery} username={props.username} />
                <LogBeer username={props.username} thisBrewery={thisBrewery} />
            </section>
        </>
    )
}

export default Brewery