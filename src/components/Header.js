import { Link } from "react-router-dom"

function Header(props) {

    function userNotLoggedIn() {
        return(
            <div className='navbar-nav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/signup' className='nav-link'>Sign Up</Link>
                <Link to='/login' className='nav-link'>Log In</Link>
                <Link to='/search' className='nav-link'>Brewery Search</Link>
            </div>
        )        
    }

    function userLoggedIn() {
        return(
            <div className='navbar-nav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/search' className='nav-link'>Brewery Search</Link>
                <Link to='/mylist' className='nav-link'>My List</Link>
                <Link to='/beer-log' className='nav-link'>Beer Log</Link>
            </div>
        )
    }

    return(
        <>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-5'>
            <Link to='/' className='nav-link navbar-brand'>Local Brews</Link>
            <div className='container-fluid'>
                {props.user === '' ? userNotLoggedIn() : userLoggedIn()}
            </div>
            
        </nav>
        </>
    )
}

export default Header