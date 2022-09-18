import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { setUser } from './actions'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import SearchBreweries from './components/breweries/searchBreweries/SearchBreweries'
import Brewery from './components/breweries/Brewery'
import Breweries from './components/breweries/Breweries'
import Beers from './components/beers/Beers'
import Auth from './components/auth/Auth'

function App(props) {
  let navigate = useNavigate()

  const [newUser, setNewUser] = useState(false)

  return (
    <>
      <Header />
      <main className='flex-shrink-0'>
        <div className='container'>

          <Routes>
            <Route exact path='/' element={<Home newUser={newUser} />} />
            <Route path='/signup' element={<Auth page='signup' />} />
            <Route path='/login' element={<Auth page='login' />} />
            <Route path='/logout' element={<Logout />}/>

            <Route path='/breweries/search' element={<SearchBreweries />} />
            <Route path='/breweries' element={<Breweries />}/>
            <Route path='/breweries/:id' element={<Brewery />} />
          
            <Route path='/beers' element={<Beers />}/>
          </Routes>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default connect(null, { setUser } )(App)