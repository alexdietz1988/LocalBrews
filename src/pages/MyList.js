import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function MyList({backend, user}) {

    const [userList, setUserList] = useState([])

    function getMyList() {
        axios.get(backend + `logs/my-list/${user}`)
            .then(({ data }) => setUserList(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {getMyList()}, [])

    function removeBrewery(e) {
        e.preventDefault()
        axios.delete(backend + `brewery/${user}/${e.target.name}`)
            .then(() => getMyList())
            .catch((error) => console.log(error))
    }

    function loaded() {
        return(
            <section>
                {userList.map(brewery => (
                    <div key={brewery._id} className="mb-2">
                    <Link to={`/brewery/${brewery.brewery_id}`}>
                        <p>{brewery.name}, {brewery.location}</p>
                    </Link>
                    <form name={brewery.brewery_id} onSubmit={removeBrewery}>
                        <button className="btn btn-warning">Remove Brewery</button>
                    </form>
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

export default MyList