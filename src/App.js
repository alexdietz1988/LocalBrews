import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from './pages/Home'
import BrewerySearch from "./pages/BrewerySearch";
import Brewery from "./pages/Brewery";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [breweries, setBreweries] = useState(null)
  const [location, setLocation] = useState({city: '', state: ''})

  function searchBreweries() {
      fetch(`https://api.openbrewerydb.org/breweries?by_city=${location.city}&by_state=${location.state}`)
          .then(response => response.json())
          .then(data => setBreweries(data))
  }

  function handleSubmit(e) {
      e.preventDefault()
      searchBreweries()
  }

  function handleChange(e) {
      setLocation((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
      }))
  }

  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search' element={<BrewerySearch
          breweries={breweries}
          location={location}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />} />
        <Route path='/brewery/:id' element={<Brewery breweries={breweries}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;