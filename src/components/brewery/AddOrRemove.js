import { useState, useEffect } from "react"
import axios from "axios"
import MyListButtons from "./MyListButtons"

function AddOrRemove(props) {

    const [inMyList, setInMyList] = useState(false)

    function checkMyList() {
        fetch(props.backend + `logs/my-list/${props.username}`)
            .then(response => response.json())
            .then(data => {
                if (data.some(element => element.brewery_id === props.thisBrewery.brewery_id)) {
                    setInMyList(true)
                } else setInMyList(false)
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

    return(<MyListButtons
        inMyList={inMyList}
        addToMyList={addToMyList}
        removeFromMyList={removeFromMyList}
    />)
}

export default AddOrRemove