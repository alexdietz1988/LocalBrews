import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import BreweryLog from './BreweryLog'
import BreweryButtons from './BreweryButtons'
import { fetchBrewery } from '../../../actions/breweries'

function Brewery(props) {
    const id = useParams().id
    useEffect(() => {fetchBrewery(id)}, [])

    return (
        <>
            <section className='mb-5'>
                <h2 className='mb-4'>{props.brewery.name}</h2>
                <section>
                    <p>{props.brewery.street}<br />{props.brewery.location}</p>
                    <p><a href={props.brewery.url} target='_blank' rel='noreferrer'>Website</a></p>
                </section>
                {props.isSignedIn ? <BreweryButtons /> : null}
            </section>
            {props.isSignedIn ?
                <BreweryLog /> :
                <>
                <Link to='/signup'>Sign up</Link> or <Link to='/login'>log in</Link> to save this brewery or log one of its beers!
                </>
            }
        </>
    )
}

function mapStateToProps(state) {
    return {
        isSignedIn: state.auth.isSignedIn,
        brewery: state.breweries.selectedBrewery
    }
}

export default connect(mapStateToProps, { fetchBrewery })(Brewery)