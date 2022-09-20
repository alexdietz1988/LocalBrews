import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addBrewery, deleteBrewery, fetchBreweries } from '../../../actions/breweries'

function BreweryButtons(props) {
    useEffect(() => {props.fetchBreweries()}, [])
    const [inMyList, setInMyList] = useState(props.inMyList)

    function clickHandler() {
        if (!inMyList) {
            props.addBrewery()
            setInMyList(!inMyList)
        } else {
            props.deleteBrewery()
            setInMyList(!inMyList)
        }
    }

    let [buttonClass, buttonMessage] = inMyList ?
        ['warning', 'Remove from My List']
        : ['primary', 'Add to My List']

    return <button className={`btn btn-${buttonClass}`} onClick={clickHandler}>{buttonMessage}</button>
}

function mapStateToProps(state) {
    let inMyList = (state.breweries.myList.some(brewery => {
        return brewery.breweryId === state.breweries.selectedBrewery.id
    }))
    return {
        brewery: state.breweries.selectedBrewery,
        inMyList
    }
}

export default connect(mapStateToProps, { fetchBreweries, addBrewery, deleteBrewery })(BreweryButtons)