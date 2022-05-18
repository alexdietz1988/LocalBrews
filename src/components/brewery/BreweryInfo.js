import { useEffect } from "react"

function BreweryInfo(props) {

    function getBrewery() {
        fetch(`https://api.openbrewerydb.org/breweries/${props.id}`)
            .then(response => response.json())
            .then(data => {
                props.setThisBrewery(
                    {
                        'username': props.username,
                        'brewery_id': data.id,
                        'name': data.name,
                        'location': `${data.city}, ${data.state}`,
                        'street': data.street,
                        'url': data.website_url
                    })})
    }

    useEffect(() => {getBrewery()}, [])

    return (
        <>
            <h2 className='mb-4'>{props.thisBrewery.name}</h2>
            
            <section>
                <p>{props.thisBrewery.street}<br />{props.thisBrewery.location}</p>
                <p><a href={props.thisBrewery.url} target='_blank' rel='noreferrer'>Website</a></p>
            </section>
        </>
    )
}

export default BreweryInfo