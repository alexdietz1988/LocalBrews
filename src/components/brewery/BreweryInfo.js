function BreweryInfo(props) {

    function addButton() {
        return(
            <form onSubmit={props.addToMyList}>
                <button className="btn btn-primary">Add to My List</button>
            </form>
        )
    }

    function removeButton() {
        return(
            <form onSubmit={props.removeFromMyList}>
                <button className="btn btn-warning">Remove from My List</button>
            </form>
        )
    }

    return (
        <>
            <h2 className='mb-4'>{props.thisBrewery.name}</h2>
            
            <section>
                <p>{props.thisBrewery.street}<br />{props.thisBrewery.location}</p>
                <p><a href={props.thisBrewery.url} target='_blank' rel='noreferrer'>Website</a></p>
            </section>

            {inMyList ? removeButton() : addButton()}
        </>
    )
}

export default BreweryInfo