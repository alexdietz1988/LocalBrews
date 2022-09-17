import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { setUser } from './actions'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Search from './components/search/Search'
import Brewery from './components/breweries/Brewery'
import MyList from './components/MyList'
import BeerLog from './components/beers/Beers'
import SignUp from './components/auth/SignUp'
import LogIn from './components/auth/LogIn'

function App(props) {
  let navigate = useNavigate()

  const [newUser, setNewUser] = useState(false)
  const [logout, setLogout] = useState(false)

  function Logout() {
    props.setUser('')
    setNewUser(false)
    setLogout(true)
    navigate('/')
  }

  return (
    <>
      <Header />
      <main className='flex-shrink-0'>
        <div className='container'>

          <Routes>
            <Route exact path='/' element={<Home newUser={newUser} logout={logout}/>} />
            <Route path='/signup' element={<SignUp setNewUser={setNewUser} setLogout={setLogout} />} />
            <Route path='/login' element={<LogIn setLogout={setLogout} />} />
            <Route path='/logout' element={<Logout />}/>

            <Route path='/search' element={<Search />} />
            <Route path='/brewery/:id' element={<Brewery />} />
            <Route path='/mylist' element={<MyList />}/>
            <Route path='/beer-log' element={<BeerLog />}/>
          </Routes>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default connect(null, { setUser } )(App)