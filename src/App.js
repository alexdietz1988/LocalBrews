import { useState } from "react"
import { Route, Routes } from "react-router-dom";
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

  const [user, setUser] = useState('')

  const backend = 'http://localhost:4000/'
  // const backend = 'https://alexdietz-localbrews-backend.herokuapp.com/'
  const openBrewery = 'https://api.openbrewerydb.org/breweries/'

  return (
    <>
      <Header user={user} />
      <main className='flex-shrink-0'>
        <div className='container'>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp backend={backend} setUser={setUser}/>} />
            <Route path='/login' element={<LogIn backend={backend} setUser={setUser} />} />

            <Route path='/search' element={<Search openBrewery={openBrewery}/>} />
            <Route path='/brewery/:id' element={<Brewery user={user} backend={backend} openBrewery={openBrewery}/>} />
            <Route path='/mylist' element={<MyList user={user} backend={backend}/>}/>
            <Route path='/beer-log' element={<BeerLog user={user} backend={backend}/>}/>
          </Routes>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;