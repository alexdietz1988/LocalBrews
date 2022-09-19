import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Home(props) {
    return(
        <div className='home'>
            <h4 className='mb-4'>Welcome to Local Brews!</h4>
            <section>
            {props.isSignedIn ?
                <>
                    <p>Try <Link to='/search'>searching for a brewery to add to your list</Link>.</p>
                    <p>Or see what <Link to='/breweries'>breweries</Link> and <Link to='/beers'>beers</Link> you've saved so far.</p>
                </> :
                <>
                    <p>Like trying new beers from local breweries?</p>
                    <p>Try <Link to='/search'>searching for a brewery near you</Link>.</p>
                    <p><Link to='/signup'>Sign up</Link> or <Link to='/login'>log in</Link> to save your favorite local breweries and beers.</p>
                </>
            }
            </section>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps)(Home)