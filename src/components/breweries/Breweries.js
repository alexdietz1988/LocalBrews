import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBrewery } from '../../actions/breweries'
import { fetchMyList } from '../apis/mylist'

function Breweries({user}) {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetchMyList(user)
            .then(({ data }) => setUserList(data))
            .catch((error) => console.log(error))
        }, [])

    function handleRemove(id) {
        deleteBrewery(user, id)
            .then(() => fetchMyList())
            .catch((error) => console.log(error))
    }

    function loaded() {
        return(
            <section>
                {userList.map(brewery => (
                    <div key={brewery._id} className='mb-2'>
                    <Link to={`/brewery/${brewery.brewery_id}`}>
                        <p>{brewery.name}, {brewery.location}</p>
                    </Link>
                    <button className='btn btn-warning' onClick={() => handleRemove(brewery.brewery_id)}>Remove Brewery</button>
                    </div>
                ))}
            </section>
        )
    }

    return(
        <>
        <h2 className='mb-4'>My List</h2>
        {userList.length > 0 ? loaded() : <h4><Link to='/search'>Search for some breweries</Link> to add to your list!</h4>}
        </>
    )

}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Breweries)