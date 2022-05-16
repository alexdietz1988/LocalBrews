import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from './pages/Home'
import BrewerySearch from "./pages/BrewerySearch";

function App() {

  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search' element={<BrewerySearch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;