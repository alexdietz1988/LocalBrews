import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import './styles.css'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home'
import BrewerySearch from "./pages/BrewerySearch";
import Brewery from "./pages/Brewery";
import MyList from "./pages/MyList";

function App() {

  const [breweries, setBreweries] = useState([])
  const [user, setUser] = useState('alex')
  const [userList, setUserList] = useState([])

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
            />} />

            <Route path='/brewery/:id' element={<Brewery
              breweries={breweries}
              userList={userList}
              setUserList={setUserList}
              user={user}
            />} />

            <Route path='/mylist' element={<MyList
              userList={userList}
              setUserList={setUserList}
              user={user}
            />}/>

          </Routes>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;