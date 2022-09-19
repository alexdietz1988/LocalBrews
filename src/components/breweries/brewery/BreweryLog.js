import { useState, useEffect } from 'react'
import BreweryLogForm from './BreweryLogForm'
import BreweryLogList from './BreweryLogList'
import { deleteBeer, logBeer, fetchBreweryLog } from '../../actions/beers'
import { connect } from 'react-redux'

function BreweryLog(props) {

    return (
        <>
            <BreweryLogForm />
            <BreweryLogList />
        </>
    )
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(BreweryLog)