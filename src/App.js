import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from './pages/Home'
import Footer from "./components/Footer";
import BrewerySearch from "./pages/BrewerySearch";
import { Route, Routes } from "react-router-dom";

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