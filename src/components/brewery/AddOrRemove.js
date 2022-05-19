import { useState, useEffect } from "react"
import axios from "axios"

function AddOrRemove(props) {
    const [inMyList, setInMyList] = useState(false)

    function checkMyList() {
        fetch(`http://localhost:4000/logs/my-list/${props.username}`)
            .then(response => response.json())
            .then(data => {
                if (data.some(element => element.brewery_id === props.thisBrewery.brewery_id)) {
                    setInMyList(true)
                }
            })
    }

    useEffect(() => {checkMyList()},[])

    function addToMyList(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/brewery/', { 
            'username': props.username,
            'brewery_id': props.thisBrewery.brewery_id,
            'name': props.thisBrewery.name,
            'location': props.thisBrewery.location,
            'street': props.thisBrewery.street,
            'url': props.thisBrewery.url
        })
    }

    function removeFromMyList(e) {
        e.preventDefault()
        axios.delete(`http://localhost:4000/brewery/${props.username}/${props.thisBrewery.brewery_id}`)
    }

    function addButton() {
        return(
            <form onSubmit={addToMyList}>
                <button className="btn btn-primary">Add to My List</button>
            </form>
        )
    }

    function removeButton() {
        return(
            <form onSubmit={removeFromMyList}>
                <button className="btn btn-warning">Remove from My List</button>
            </form>
        )
    }

    return(
        inMyList ? removeButton() : addButton()
    )
}

export default AddOrRemove