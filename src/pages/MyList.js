import { useEffect } from "react"
import { Link } from "react-router-dom"

function MyList(props) {

    function getMyList() {
        fetch(`http://localhost:4000/my-list/${props.user}`)
            .then(response => response.json())
            .then(data => props.setUserList(data))
    }

    useEffect(() => {getMyList()}, [])

    function handleSubmit(e) {
        e.preventDefault()
        // let userList = props.userList
        // let index = userList.findIndex(element => element.id = id)
        // userList.splice(index, 1)
        // props.setUserList(userList)
    }

    function loaded() {

        return(
            <section>
                <h3 className='mb-3'>Results</h3>
                {props.userList.map(brewery => (

                    <div>
                    <Link className='d-inline-block' to={`/brewery/${brewery.brewery_id}`} key={brewery.brewery_id}><p>{brewery.name}, {brewery.location}</p></Link>
                    <form className='d-inline-block p-4' onSubmit={handleSubmit}>
                        <button className='btn btn-warning'>Remove</button>
                    </form>
                </div>

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