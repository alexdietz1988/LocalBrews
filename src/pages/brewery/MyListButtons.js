import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { requestRemoveBrewery } from '../../apis/brewery'
import { requestMyList, requestAddToMyList } from '../../apis/mylist'

function AddOrRemove({user, thisBrewery}) {

    const [inMyList, setInMyList] = useState(false)

    function checkMyList() {
        requestMyList(user)
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
        requestRemoveBrewery(user, thisBrewery.brewery_id)
        setInMyList(false)
    }

    let [buttonClass, clickHandler, buttonMessage] = inMyList ?
        ['warning', removeFromMyList, 'Remove from My List']
        : ['primary', addToMyList, 'Add to My List']

    return <button className={`btn btn-${buttonClass}`} onClick={clickHandler}>{buttonMessage}</button>
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AddOrRemove)