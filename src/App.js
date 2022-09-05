import { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
import './styles.css'

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Search from "./pages/search/Search";
import Brewery from "./pages/brewery/Brewery";
import MyList from "./pages/MyList";
import BeerLog from "./pages/beerlog/BeerLog";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";

function App() {
  let navigate = useNavigate()

  const [user, setUser] = useState('')
  const [newUser, setNewUser] = useState(false)
  const [logout, setLogout] = useState(false)

  function Logout() {
    setUser('')
    setNewUser(false)
    setLogout(true)
    navigate('/')
  }

  return (
    <>
      <Header user={user} setUser={setUser} />
      <main className='flex-shrink-0'>
        <div className='container'>

          <Routes>
            <Route exact path='/' element={<Home user={user} newUser={newUser} logout={logout}/>} />
            <Route path='/signup' element={<SignUp setUser={setUser} setNewUser={setNewUser} setLogout={setLogout} />} />
            <Route path='/login' element={<LogIn user={user} setUser={setUser} setLogout={setLogout} />} />
            <Route path='/logout' element={<Logout />}/>

            <Route path='/search' element={<Search />} />
            <Route path='/brewery/:id' element={<Brewery user={user} />} />
            <Route path='/mylist' element={<MyList user={user} />}/>
            <Route path='/beer-log' element={<BeerLog user={user} />}/>
          </Routes>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;