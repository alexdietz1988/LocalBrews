import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import BreweryButtons from './BreweryButtons'
import BreweryLogForm from './BreweryLogForm'
import BreweryLogList from './BreweryLogList'
import { fetchBrewery } from '../../../actions/breweries'

function Brewery(props) {
    const id = useParams().id
    useEffect(() => {props.fetchBrewery(id)}, [])

    if (props.brewery.id !== id) {
        return <div>Loading...</div>
    }

    return (
        <>
            <section className='mb-5'>
                <h2 className='mb-4'>{props.brewery.name}</h2>
                <section>
                    <p>{props.brewery.street}<br />{props.brewery.location}</p>
                    {props.brewery.website_url ? <p><a href={props.brewery.website_url} target='_blank' rel='noreferrer'>Website</a></p> : ''}
                </section>
                {props.isSignedIn ? <BreweryButtons /> : null}
            </section>
            {props.isSignedIn ?
                <>
                    <BreweryLogForm />
                    <BreweryLogList />
                </> :
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
        brewery: state.breweries.selectedBrewery.data
    }
}

export default connect(mapStateToProps, { fetchBrewery })(Brewery)