import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

function Header(props) {

    function notSignedIn() {
        return(
            <div className='navbar-nav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/signup' className='nav-link'>Sign Up</Link>
                <Link to='/login' className='nav-link'>Log In</Link>
                <Link to='/search' className='nav-link'>Brewery Search</Link>
            </div>
        )        
    }

    function signedIn() {
        return(
            <>
            <div className='navbar-nav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/search' className='nav-link'>Brewery Search</Link>
                <Link to='/mylist' className='nav-link'>My List</Link>
                <Link to='/beers' className='nav-link'>Beer Log</Link>
                <Link to='/' className='nav-link' onClick={() => props.logout()}>Logout</Link>
            </div>
            </>
        )
    }

    return(
        <>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-5'>
            <Link to='/' className='nav-link navbar-brand'>Local Brews</Link>
            <div className='container-fluid'>
                {props.isSignedIn ? signedIn() : notSignedIn()}
            </div>
            
        </nav>
        </>
    )
}

function mapStateToProps(state) {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { logout })(Header)