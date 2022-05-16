import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

import './styles.css'
import Header from "./components/Header";

import Footer from "./components/Footer";

import Home from './pages/Home'
import BrewerySearch from "./pages/BrewerySearch";
import Brewery from "./pages/Brewery";



function App() {

  const [breweries, setBreweries] = useState(null)
  const [location, setLocation] = useState({city: '', state: ''})

  return (
    <>
      <Header />

      <main className='flex-shrink-0'>
        <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search' element={<BrewerySearch
          breweries={breweries}
          setBreweries={setBreweries}
          location={location}
          setLocation={setLocation}
        />} />
        <Route path='/brewery/:id' element={<Brewery breweries={breweries}/>} />
      </Routes>
      </div>
      </main>
      <Footer />
    </>
  );
}

export default App;