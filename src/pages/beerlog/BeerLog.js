import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BeerLogUI from './BeerLogUI'
import { requestBeerLog, requestDeleteBeer } from '../../apis'

function BeerLog(props) {
    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        requestBeerLog(props.user)
            .then(({ data }) => setBeerLog(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => getBeerLog(), [])

    function removeBeer(id) {
        requestDeleteBeer(id)
            .then(() => getBeerLog())
            .catch((error) => console.log(error))
    }

    return(
        <>
            <BeerLogUI beerLog={beerLog} removeBeer={removeBeer}/>
        </>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(BeerLog)