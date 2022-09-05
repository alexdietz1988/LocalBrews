import { useState, useEffect } from "react"
import { requestCheckMyList, requestAddToMyList, requestDelete } from '../../apis'

function AddOrRemove({user, thisBrewery}) {

    const [inMyList, setInMyList] = useState(false)

    function checkMyList() {
        requestCheckMyList(user)
            .then(({data}) => {
                setInMyList(data.some(element => element.brewery_id === thisBrewery.brewery_id))
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {checkMyList()},[])

    function addToMyList() {
        requestAddToMyList(user, thisBrewery)
        setInMyList(true)
    }

    function removeFromMyList() {
        requestDelete(user, thisBrewery.brewery_id)
        setInMyList(false)
    }

    let [buttonClass, clickHandler, buttonMessage] = inMyList ?
        ['warning', removeFromMyList, 'Remove from My List']
        : ['primary', addToMyList, 'Add to My List']

    return <button className={`btn btn-${buttonClass}`} onClick={clickHandler}>{buttonMessage}</button>
}

export default AddOrRemove