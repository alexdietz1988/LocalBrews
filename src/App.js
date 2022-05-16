import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from './pages/Home'
import Footer from "./components/Footer";
import BrewerySearch from "./pages/BrewerySearch";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <BrewerySearch />
      <Footer />
    </>
  );
}

export default App;