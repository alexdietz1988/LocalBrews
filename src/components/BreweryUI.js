function BreweryUI(props) {
    return (
        <>
            <h2 className='mb-4'>{props.thisBrewery.name}</h2>
            
            <section>
                <p>{props.thisBrewery.street}</p>
                <p>{props.thisBrewery.city}, {props.thisBrewery.state}</p>
                <p><a href={props.thisBrewery.website_url} target='_blank' rel='noreferrer'>Website</a></p>
            </section>

            <form onSubmit={props.addToMyList}>
                <button className="btn btn-primary">Add to My List</button>
            </form>
        </>
    )
}

export default BreweryUI