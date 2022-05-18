function BreweryUI(props) {
    console.log(props.thisBrewery.name)
    return (
        <>
            <h2 className='mb-4'>{props.thisBrewery.name}</h2>
            
            <section>
                <p>{props.thisBrewery.street}</p>
                <p>{props.thisBrewery.location}</p>
                <p><a href={props.thisBrewery.url} target='_blank' rel='noreferrer'>Website</a></p>
            </section>

            <form onSubmit={props.addToMyList}>
                <button className="btn btn-primary">Add to My List</button>
            </form>

            <form onSubmit={props.removeFromMyList}>
                <button className="btn btn-warning">Remove from My List</button>
            </form>
        </>
    )
}

export default BreweryUI