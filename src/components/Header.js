import { Link } from "react-router-dom"

function Header() {
    return(
        <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-5'>
            <div className='navbar-brand'>Local Brews</div>
            <div className='container-fluid'>
            <div className='navbar-nav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/search' className='nav-link'>Brewery Search</Link>
            </div>
            </div>
        </nav>

    )
}

export default Header