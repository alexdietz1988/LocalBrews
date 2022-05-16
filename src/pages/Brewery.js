import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Brewery(props) {

    // const [brewery, setBrewery] = useState(null)

    const id = useParams().id

    const brewery = props.breweries.find(element => element.id === id)

    // useEffect(() => {
    //     fetch(`https://api.openbrewerydb.org/breweries/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setBrewery(data)
    //             console.log(brewery)
    //         })
    //     }, []
    // )
    
    return(
        <>
            <h2 className='mb-4'>{brewery.name}</h2>

            <section>
                <p>{brewery.street}</p>
                <p>{brewery.city}, {brewery.state}</p>
                <p><a href={brewery.website_url} target='_blank' rel='noreferrer'>Website</a></p>
            </section>

        </>
    )
}

export default Brewery