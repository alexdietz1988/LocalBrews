import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

function Header(props) {

    function notSignedIn() {
        return(
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-5'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>Local Brews</Link>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul class='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/breweries/search' className='nav-link'>Brewery Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='d-flex btn-group'>
                <Link to='/signup' className='btn btn-primary'>Signup</Link>
                <Link to='/login' className='btn btn-success'>Login</Link>
            </div>
            </nav>
        )        
    }

    function signedIn() {
        return(
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-5'>
            <Link to='/' className='nav-link navbar-brand'>Local Brews</Link>
            <div className='container-fluid'>
            <div className='navbar-nav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/breweries/search' className='nav-link'>Brewery Search</Link>
                <Link to='/breweries' className='nav-link'>My Breweries</Link>
                <Link to='/beers' className='nav-link'>My Beers</Link>
            </div>
                <Link to='/' className='btn btn-primary' onClick={() => props.logout()}>Logout</Link>
            </div>
            </nav>
        )
    }

    return(
        <>

                {props.isSignedIn ? signedIn() : notSignedIn()}


        </>
    )
}

function mapStateToProps(state) {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { logout })(Header)