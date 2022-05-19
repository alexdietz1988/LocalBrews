function BreweryInfo(props) {

    return (
        <>
            <h2 className='mb-4'>{props.thisBrewery.name}</h2>
            
            <section>
                <p>{props.thisBrewery.street}<br />{props.thisBrewery.location}</p>
                <p><a href={props.thisBrewery.url} target='_blank' rel='noreferrer'>Website</a></p>
            </section>
        </>
    )
}

export default BreweryInfo