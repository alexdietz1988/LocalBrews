import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBreweries, addBrewery, deleteBrewery } from '../../../actions/breweries'

function BreweryButtons(props) {
    const [inMyList, setInMyList] = useState(false)

    useEffect(() => props.fetchBreweries(), [])
    useEffect(() => {
        setInMyList(props.myList.some(element => element.brewery_id === props.brewery.brewery_id))
        }, [props.fetchCount])

    function clickHandler() {
        if (inMyList) {
            props.addBrewery(props.brewery)
            props.fetchBreweries()

        } else if (!inMyList) {
            props.deleteBrewery(props.brewery.brewery_id)
            props.fetchBreweries()
        }
    }

    let [buttonClass, buttonMessage] = inMyList ?
        ['warning', 'Remove from My List']
        : ['primary', 'Add to My List']

    return <button className={`btn btn-${buttonClass}`} onClick={clickHandler}>{buttonMessage}</button>
}

function mapStateToProps(state) {
    return {
        myList: state.breweries.myList,
        brewery: state.breweries.selectedBrewery,
        fetchCount: state.breweries.fetchCount
    }
}

export default connect(mapStateToProps, { fetchBreweries, addBrewery, deleteBrewery })(BreweryButtons)