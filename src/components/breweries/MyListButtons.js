import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteBrewery } from '../../actions/breweries'
import { fetchMyList, addToMyList } from '../../apis/mylist'

function AddOrRemove({user, thisBrewery}) {

    const [inMyList, setInMyList] = useState(false)

    function checkMyList() {
        fetchMyList(user)
            .then(({data}) => {
                setInMyList(data.some(element => element.brewery_id === thisBrewery.brewery_id))
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {checkMyList()},[])

    function handleAdd() {
        addToMyList(user, thisBrewery)
        setInMyList(true)
    }

    function handleRemove() {
        deleteBrewery(user, thisBrewery.brewery_id)
        setInMyList(false)
    }

    let [buttonClass, clickHandler, buttonMessage] = inMyList ?
        ['warning', handleAdd, 'Remove from My List']
        : ['primary', handleRemove, 'Add to My List']

    return <button className={`btn btn-${buttonClass}`} onClick={clickHandler}>{buttonMessage}</button>
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AddOrRemove)