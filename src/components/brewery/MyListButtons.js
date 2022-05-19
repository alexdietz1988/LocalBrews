function MyListButtons(props) {

    if (props.inMyList) {
        return(
            <form onSubmit={props.removeFromMyList}>
                <button className="btn btn-warning">Remove from My List</button>
            </form>
        )
    
    } else return(
        <form onSubmit={props.addToMyList}>
            <button className="btn btn-primary">Add to My List</button>
        </form>
    )

}

export default MyListButtons