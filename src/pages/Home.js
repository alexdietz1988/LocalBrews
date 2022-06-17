import { Link } from "react-router-dom"

function Home(props) {

    function userNotLoggedIn() {
        return(
            <>
                <h2 className='mb-3'>Welcome to Local Brews!</h2>

                <section>
                    <p>Like trying new beers from local breweries?</p>
                    <p>Try <Link to='/search'>searching for a brewery near you</Link>.</p>
                    <p><Link to='/signup'>Sign up</Link> or <Link to='/login'>log in</Link> to save your favorite local breweries and beers.</p>
                </section>
            </>
        )
    }

    function userLoggedIn() {
        return(
            <>
            {props.newUser ? <h4 className='mb-4'>Welcome to Local Brews, {props.user}!</h4>
                : <h4 className='mb-4'>Welcome back, {props.user}!</h4>}
            <p>Try <Link to='/search'>searching for a brewery to add to your list</Link>.</p>
            <p>Or see what <Link to='/mylist'>breweries</Link> and <Link to='/beer-log'>beers</Link> you've saved so far.</p>
            </>
        )
    }

    return(
        <div className='home'>
            {props.user === '' ? userNotLoggedIn() : userLoggedIn()}
        </div>
    )
}

export default Home