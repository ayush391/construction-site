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

import { BrowserRouter as Router} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";


import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
  palette: {
    primary: {
      main:'#2e3440',
    },
    secondary: {
      main: '#4c566a',
    },
  },
});


function App() {
  return (
    <div className="App">

    <ThemeProvider theme={theme}>

      <div className='header'>
        <Navbar></Navbar>

        
        {/* <br /> */}
        {/* <img src={const_logo} className="logo_image" alt="Const Site IMG" /> */}


        {/* <h2 className='heading'>Construction Site</h2> */}
        {/* <br /> */}

      </div>

      <Routes >
        <Route path='/freelance' element={<Freelance />} />
        <Route path='/eshop' element={<E_shop />} />
        <Route path='/' element={<Home />} />

        <Route exact path='/login' element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>

    </div>
  );
}

export default App;
