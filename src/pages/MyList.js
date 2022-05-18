import { useEffect } from "react"
import { Link } from "react-router-dom"

function MyList(props) {

    function getMyList() {
        fetch(`http://localhost:4000/my-list/${props.user}`)
            .then(response => response.json())
            .then(data => props.setUserList(data))
    }

    useEffect(() => {getMyList()}, [])

    function loaded() {
        console.log(props.userList)
        return(
            <section>
                {props.userList.map(brewery => (
                    <Link to={`/brewery/${brewery.brewery_id}`} key={brewery.brewery_id}><p>{brewery.name}, {brewery.location}</p></Link>
                ))}
            </section>
        )
    }

    return(
        <>
        <h2 className='mb-4'>My List</h2>
        {props.userList ? loaded() : <p>Loading...</p>}
        </>
    )

}

export default MyList