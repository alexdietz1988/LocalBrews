import { Link } from "react-router-dom"

function Header() {
    return(
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-5'>
            <Link to='/' className='nav-link navbar-brand'>Local Brews</Link>
            <div className='container-fluid'>
            <div className='navbar-nav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/search' className='nav-link'>Brewery Search</Link>
                <Link to='/mylist' className='nav-link'>My List</Link>
                <Link to='/beer-log' className='nav-link'>Beer Log</Link>
            </div>
            </div>
        </nav>
    )
}

export default Header