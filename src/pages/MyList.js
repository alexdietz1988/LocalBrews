import { useEffect } from "react"
import { Link } from "react-router-dom"

function MyList(props) {


    function getMyList() {
        fetch(`http://localhost:4000/my-list/${props.user}`)
            .then(response => response.json())
            props.setUserList((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            .then(data => console.log(data))
            // .then(data => props.setUserList(data))
            // .then(console.log(props.userList))
    }

    useEffect(() => {getMyList()}, [])

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     let userList = props.userList
    //     let index = userList.findIndex(element => element.id = id)
    //     userList.splice(index, 1)
    //     props.setUserList(userList)
    // }

    // function mapMyList() {
    //     const mapping = myList.map(brewery => {
    //         return(
    //             <div>
    //                 <Link className='d-inline-block' to={`/brewery/${brewery.id}`} key={brewery.id}><p>{brewery.name}</p></Link>
    
    //                 {/* <form className='d-inline-block p-4' onSubmit={handleSubmit}>
    //                     <button className='btn btn-warning'>Remove</button>
    //                 </form> */}
    //             </div>)
    //     })
    //     return mapping
    // }

    // if (myList) mapMyList()

    // return(
    //     <>
    //         <h2 className='mb-4'>My List</h2>
    //         {myList ? mapMyList() : <p>Loading...</p>}
    //     </>
    // )
}

export default MyList