import logo from './logo.svg';
import './App.css';
import const_logo from './Assets/const_logo.jpg'
import banner from './Assets/back_banner.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import Freelance from './SubChild/freelance'
import E_shop from './SubChild/eShop'
import Card_layout from './Components/Card';
import Home from './SubChild/Home';

import Navbar from './Components/Navbar'
import CardButton from './Components/CardButton'

function App() {
  return (
    <div className="App">


      <div className='header'>
        <Navbar></Navbar>

        
        {/* <br /> */}
        {/* <img src={const_logo} className="logo_image" alt="Const Site IMG" /> */}


        {/* <h2 className='heading'>Construction Site</h2> */}
        {/* <br /> */}

      </div>

      <Routes>
        <Route path='/freelance' element={<Freelance />} />
        <Route path='/eshop' element={<E_shop />} />
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
