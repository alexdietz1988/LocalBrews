import { useState } from 'react';
import React from 'react';

function BrewerySearch() {

    const [location, setLocation] = useState({city: '', state: ''})
    const [breweries, setBreweries] = useState(null)

    function searchBreweries() {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${location.city}&by_state=${location.state}`)
            .then(response => response.json())
            .then(data => setBreweries(data))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(location)
        searchBreweries()
    }

    function handleChange(e) {
        setLocation((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function loaded() {
        return(
            breweries.map(brewery => (<p key={brewery.name}>{brewery.name}</p>))
        )
    }

    return(
        <>
            <h2>Brewery Search</h2>

            <form onSubmit={handleSubmit}>
                <label>City</label>
                <input id='city' name='city' type='text' value={location.city} onChange={handleChange}></input>

                <label>State</label>
                <select id='state' name='state' value={location.state} onChange={handleChange}>
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

                <button>Submit</button>
            </form>

            {breweries ? loaded() : <p>Something</p>}
        </>
    )
}

export default BrewerySearch