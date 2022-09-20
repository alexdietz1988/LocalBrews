import { useEffect } from 'react'
import { connect } from 'react-redux'
import { addBrewery, deleteBrewery, checkMyList, toggleInMyList } from '../../../actions/breweries'

function BreweryButtons(props) {
    let inMyList = props.brewery.inMyList
    useEffect(() => {props.checkMyList()}, [])

    function clickHandler() {
        if (!inMyList) {
            props.addBrewery(props.brewery.data)
            props.toggleInMyList()
        } else {
            props.deleteBrewery()
            props.toggleInMyList()
        }
    }

    let [buttonClass, buttonMessage] = inMyList ?
        ['warning', 'Remove from My List']
        : ['primary', 'Add to My List']

    return <button className={`btn btn-${buttonClass}`} onClick={clickHandler}>{buttonMessage}</button>
}

function mapStateToProps(state) {
    return {
        brewery: state.breweries.selectedBrewery
    }
}

export default connect(mapStateToProps, { checkMyList, addBrewery, deleteBrewery, toggleInMyList })(BreweryButtons)