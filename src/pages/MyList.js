import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function MyList(props) {

    const [userList, setUserList] = useState([])

    function getMyList() {
        fetch(`https://alexdietz-localbrews-backend.herokuapp.com/logs/my-list/${props.username}`)
            .then(response => response.json())
            .then(data => {setUserList(data)})
    }

    useEffect(() => {getMyList()}, [])

    function loaded() {
        return(
            <section>
                {userList.map(brewery => (
                    <Link to={`/brewery/${brewery.brewery_id}`} key={brewery._id}><p>{brewery.name}, {brewery.location}</p></Link>
                ))}
            </section>
        )
    }

    return(
        <>
        <h2 className='mb-4'>My List</h2>
        {userList ? loaded() : <p>Loading...</p>}
        </>
    )

}

export default MyList