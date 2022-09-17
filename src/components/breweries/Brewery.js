import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BreweryLog from './BreweryLog'
import MyListButtons from './MyListButtons'
import { fetchBrewery } from '../../actions/breweries'

function Brewery({user}) {

    const brewery_id = useParams().id

    const [thisBrewery, setThisBrewery] = useState({
        user,
        brewery_id,
        'name': '',
        'location': '',
        'street': '',
        'url': ''
    })

    function getBreweryInfo() {
        fetchBrewery(brewery_id)
            .then(({ data }) => {
                setThisBrewery(
                    {
                        'username': user,
                        'brewery_id': brewery_id,
                        'name': data.name,
                        'location': `${data.city}, ${data.state}`,
                        'street': data.street,
                        'url': data.website_url
                    }
                )})
            .catch((error) => console.log(error))
    }

    useEffect(() => {getBreweryInfo()}, [])

    function BreweryInfo() {
        return(
            <>
            <h2 className='mb-4'>{thisBrewery.name}</h2>
                <section>
                    <p>{thisBrewery.street}<br />{thisBrewery.location}</p>
                    <p><a href={thisBrewery.url} target='_blank' rel='noreferrer'>Website</a></p>
                </section>
            </>
        )
    }

    if (user === '') {
        return(
            <>
            <section className='mb-5'>
                {BreweryInfo()}
            </section>

            <Link to='/signup'>Sign up</Link> or <Link to='/login'>log in</Link> to save this brewery or log one of its beers!

        </>
        )
    }

    return(
        <>
            <section className='mb-5'>
                {BreweryInfo()}
                <MyListButtons thisBrewery={thisBrewery} />
            </section>

            <BreweryLog thisBrewery={thisBrewery} brewery_id={brewery_id} />
        </>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Brewery)