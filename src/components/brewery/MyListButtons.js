import { useState, useEffect } from "react"
import axios from "axios"

function AddOrRemove(props) {

    const [inMyList, setInMyList] = useState(false)

    function checkMyList() {
        fetch(props.backend + `logs/my-list/${props.username}`)
            .then(response => response.json())
            .then(data => {
                setInMyList(data.some(element => element.brewery_id === props.thisBrewery.brewery_id))
                console.log(inMyList)
            })
    }

    useEffect(() => {checkMyList()},[])

    function addToMyList(e) {
        e.preventDefault()
        axios.post(props.backend + 'brewery/', { 
            'username': props.username,
            'brewery_id': props.thisBrewery.brewery_id,
            'name': props.thisBrewery.name,
            'location': props.thisBrewery.location,
            'street': props.thisBrewery.street,
            'url': props.thisBrewery.url
        })
        checkMyList()
    }

    function removeFromMyList(e) {
        e.preventDefault()
        axios.delete(props.backend + `brewery/${props.username}/${props.thisBrewery.brewery_id}`)
        checkMyList()
    }

    function addButton() {
        return (
            <form onSubmit={removeFromMyList}>
                <button className="btn btn-warning">Remove from My List</button>
            </form>
        )
    }

    function removeButton() {
        return(
            <form onSubmit={addToMyList}>
                <button className="btn btn-primary">Add to My List</button>
            </form>
        )
    }

    return(
        <>
            {inMyList ? addButton() : removeButton()}
        </>
    )
}

export default AddOrRemove