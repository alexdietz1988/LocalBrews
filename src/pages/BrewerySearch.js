import { Link } from "react-router-dom"

function BrewerySearch(props) {

    function loaded() {

        let formattedLocation = `${props.location.city[0].toUpperCase()}${props.location.city.slice(1)}, ${props.location.state[0].toUpperCase()}${props.location.state.slice(1)}`

        return(
            <section>
                <h3 className='mb-3'>Breweries in {formattedLocation}</h3>
            {props.breweries.map(brewery => (
                <Link to={`/brewery/${brewery.id}`} key={brewery.name}><p>{brewery.name}</p></Link>
            ))}
            </section>
        )
    }

    return(
        <>
            <h2 className='mb-4'>Brewery Search</h2>

            <form className='location-form mb-4 row g-1' onSubmit={props.handleSubmit}>

                <div className='mb-2 col-sm'>
                <input placeholder='City' id='city' name='city' type='text' className='form-control' value={props.location.city} onChange={props.handleChange}></input>
                </div>

                <div className='mb-2 col-sm'>
                <select placeholder='State' id='state' name='state' className='form-select' value={props.location.state} onChange={props.handleChange}>
                    <option>State</option>
                    <option value='alabama'>Alabama</option>
                    <option value='alaska'>Alaska</option>
                    <option value='arizona'>Arizona</option>
                    <option value='arkansas'>Arkansas</option>
                    <option value='california'>California</option>
                    <option value='colorado'>Colorado</option>
                    <option value='connecticut'>Connecticut</option>
                    <option value='delaware'>Delaware</option>
                    <option value='district of columbia'>District Of Columbia</option>
                    <option value='florida'>Florida</option>
                    <option value='georgia'>Georgia</option>
                    <option value='hawaii'>Hawaii</option>
                    <option value='idaho'>Idaho</option>
                    <option value='illinois'>Illinois</option>
                    <option value='indiana'>Indiana</option>
                    <option value='iowa'>Iowa</option>
                    <option value='kansas'>Kansas</option>
                    <option value='kentucky'>Kentucky</option>
                    <option value='louisiana'>Louisiana</option>
                    <option value='maine'>Maine</option>
                    <option value='maryland'>Maryland</option>
                    <option value='massachusetts'>Massachusetts</option>
                    <option value='michigan'>Michigan</option>
                    <option value='minnesota'>Minnesota</option>
                    <option value='mississippi'>Mississippi</option>
                    <option value='missouri'>Missouri</option>
                    <option value='montana'>Montana</option>
                    <option value='nebraska'>Nebraska</option>
                    <option value='nevada'>Nevada</option>
                    <option value='new hampshire'>New Hampshire</option>
                    <option value='new jersey'>New Jersey</option>
                    <option value='new mexico'>New Mexico</option>
                    <option value='new york'>New York</option>
                    <option value='north carolina'>North Carolina</option>
                    <option value='north dakota'>North Dakota</option>
                    <option value='ohio'>Ohio</option>
                    <option value='oklahoma'>Oklahoma</option>
                    <option value='oregon'>Oregon</option>
                    <option value='pennsylvania'>Pennsylvania</option>
                    <option value='rhode island'>Rhode Island</option>
                    <option value='south carolina'>South Carolina</option>
                    <option value='south dakota'>South Dakota</option>
                    <option value='tennessee'>Tennessee</option>
                    <option value='texas'>Texas</option>
                    <option value='utah'>Utah</option>
                    <option value='vermont'>Vermont</option>
                    <option value='virginia'>Virginia</option>
                    <option value='washington'>Washington</option>
                    <option value='west virginia'>West Virginia</option>
                    <option value='wisconsin'>Wisconsin</option>
                    <option value='wyoming'>Wyoming</option>
                </select>
                </div>

                <div className='mb-2 col-sm'>
                <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>

            {props.breweries ? loaded() : null}
        </>
    )
}

export default BrewerySearch