import { useState, useEffect } from 'react'
import BreweryLogForm from './BreweryLogForm'
import BreweryLogList from './BreweryLogList'
import { deleteBeer, logBeer, fetchBreweryLog } from '../../actions/beers'
import { connect } from 'react-redux'

function BreweryLog({brewery_id, thisBrewery}) {
    const [beerLog, setBeerLog] = useState([])

    function getBeerLog() {
        setBeerLog([])
        fetchBreweryLog(brewery_id)
            .then(({ data }) => setBeerLog(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => getBeerLog(), [])

    const [beer, setBeer] = useState({
        name: '',
        style: '',
        rating: ''
    })

    function handleChange(e) {
        setBeer((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        logBeer(brewery_id, thisBrewery, beer)
            .then(() => getBeerLog())
            .catch((error) => console.log(error))
    }

    function removeBeer(id) {
        deleteBeer(id)
            .then(() => fetchBreweryLog())
            .catch((error) => console.log(error))
    }

    return (
        <>
            <BreweryLogForm beer={beer} handleChange={handleChange} handleSubmit={handleSubmit} />
            <BreweryLogList beerLog={beerLog} removeBeer={removeBeer}/>
        </>
    )
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(BreweryLog)