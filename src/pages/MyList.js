import { Link } from "react-router-dom"

function MyList(props) {

    let id

    function handleSubmit(e) {
        e.preventDefault()
        let userList = props.userList
        let index = userList.findIndex(element => element.id = id)
        userList.splice(index, 1)
        props.setUserList(userList)
    }

    const mapping = props.userList.map(brewery => {
        id = brewery.id

        return(
            <div>
                <Link className='d-inline-block' to={`/brewery/${brewery.id}`} key={brewery.id}><p>{brewery.name}</p></Link>

                <form className='d-inline-block p-4' onSubmit={handleSubmit}>
                    <button className='btn btn-warning'>Remove</button>
                </form>
            </div>)
    })

    return(
        <>
            <h2 className='mb-4'>My List</h2>
            {mapping}
        </>
    )
}

export default MyList