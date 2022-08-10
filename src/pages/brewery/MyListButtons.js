import { useState, useEffect } from "react"
import axios from "axios"

function AddOrRemove({user, backend, thisBrewery}) {

    const [inMyList, setInMyList] = useState(false)

    function checkMyList() {
        axios.get(backend + `logs/my-list/${user}`)
            .then(({data}) => {
                setInMyList(data.some(element => element.brewery_id === thisBrewery.brewery_id))
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {checkMyList()},[])

    function addToMyList() {
        axios.post(backend + 'brewery/', { 
            'username': user,
            'brewery_id': thisBrewery.brewery_id,
            'name': thisBrewery.name,
            'location': thisBrewery.location,
            'street': thisBrewery.street,
            'url': thisBrewery.url
        })
        setInMyList(true)
    }

    function removeFromMyList() {
        axios.delete(backend + `brewery/${user}/${thisBrewery.brewery_id}`)
        setInMyList(false)
    }

    let [buttonClass, clickHandler, buttonMessage] = inMyList ?
        ['warning', removeFromMyList, 'Remove from My List']
        : ['primary', addToMyList, 'Add to My List']

    return <button className={`btn btn-${buttonClass}`} onClick={clickHandler}>{buttonMessage}</button>
}

export default AddOrRemove