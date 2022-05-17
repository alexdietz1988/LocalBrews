import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Brewery(props) {

    const [thisBrewery, setThisBrewery] = useState({})
    const id = useParams().id
    
    useEffect(() => {if (props.breweries.length > 0) {
        setThisBrewery(props.breweries.find(element => element.id === id))
    } else callAPI()
    }, [])

    function callAPI() {
        fetch(`https://api.openbrewerydb.org/breweries/${id}`)
            .then(response => response.json())
            .then(data => {setThisBrewery(data)})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:4000/add-brewery/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'hello': 'hello'})
        })
            .then(data => console.log(data))
        // let newUserList = props.userList
        // newUserList.push(thisBrewery)
        // props.setUserList(newUserList)
    }

    return(
        <>
            <h2 className='mb-4'>{thisBrewery.name}</h2>
            
            <section>
                <p>{thisBrewery.street}</p>
                <p>{thisBrewery.city}, {thisBrewery.state}</p>
                <p><a href={thisBrewery.website_url} target='_blank' rel='noreferrer'>Website</a></p>
            </section>

            <form onSubmit={handleSubmit}>
                <button className="btn btn-primary">Add to My List</button>
            </form>
        </>
    )

}

export default Brewery