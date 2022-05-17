import { Link } from "react-router-dom"

function MyList(props) {

    const mapping = props.userList.map(brewery => {
        return <Link to={`/brewery/${brewery.id}`} key={brewery.id}><p>{brewery.name}</p></Link>
    })

    console.log(props.userList)

    return(
        <>
            <h2 className='mb-4'>My List</h2>
            {mapping}
        </>
    )
}

export default MyList