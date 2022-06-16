import { Route, Routes } from "react-router-dom";
import './styles.css'

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Search from "./pages/Search";
import Brewery from "./pages/Brewery";
import MyList from "./pages/MyList";
import BeerLog from "./pages/BeerLog";
import SignUp from "./pages/SignUp";

function App() {

  const username = 'alex'
  const backend = 'https://alexdietz-localbrews-backend.herokuapp.com/'
  const openBrewery = 'https://api.openbrewerydb.org/breweries/'

  return (
    <>
      <Header />
      <main className='flex-shrink-0'>
        <div className='container'>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp backend={backend} />} />
            <Route path='/search' element={<Search openBrewery={openBrewery}/>} />
            <Route path='/brewery/:id' element={<Brewery username={username} backend={backend} openBrewery={openBrewery}/>} />
            <Route path='/mylist' element={<MyList username={username} backend={backend}/>}/>
            <Route path='/beer-log' element={<BeerLog username={username} backend={backend}/>}/>
          </Routes>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;