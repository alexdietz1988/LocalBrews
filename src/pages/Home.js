import { Link } from "react-router-dom"

function Home({user, newUser, logout}) {

    if (user === '' && logout) {
        return (
            <div className='home'>
                <h4 className='mb-4'>Logout Successful</h4>
                <p>Come again soon!</p>
            </div>
        )
    }

    else if (user === '') {
        return(
            <div className='home'>
                <h2 className='mb-3'>Welcome to Local Brews!</h2>

                <section>
                    <p>Like trying new beers from local breweries?</p>
                    <p>Try <Link to='/search'>searching for a brewery near you</Link>.</p>
                    <p><Link to='/signup'>Sign up</Link> or <Link to='/login'>log in</Link> to save your favorite local breweries and beers.</p>
                </section>
            </div>
        )
    }

    let welcome = newUser ? 'Welcome to Local Brews' : 'Welcome back'

    return(
        <div className='home'>
            <h4 className='mb-4'>{welcome}, {user}!</h4>
            <p>Try <Link to='/search'>searching for a brewery to add to your list</Link>.</p>
            <p>Or see what <Link to='/mylist'>breweries</Link> and <Link to='/beer-log'>beers</Link> you've saved so far.</p>
        </div>
    )
}

export default Home