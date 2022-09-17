import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BeersUI from './BeersUI'
import { fetchBeers, deleteBeer } from '../../actions/beers'

function Beers({ user }) {
    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        fetchBeers(user)
            .then(({ data }) => setBeerLog(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => getBeerLog(), [])

    function removeBeer(id) {
        deleteBeer(id)
            .then(() => getBeerLog())
            .catch((error) => console.log(error))
    }

    return(
        <BeersUI beerLog={beerLog} removeBeer={removeBeer}/>
    )
}

function mapStateToProps(state) {
    return {user: state.user}
}

export default connect(mapStateToProps)(Beers)