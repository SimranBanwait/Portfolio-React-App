
import React from 'react';
import { Routes, Route } from "react-router-dom";


import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import News from './Components/News/News';
import Weather from './Components/Weather/Weather';
import Contact from './Components/Contact/Contact';
import ErrorPage from './Components/Error Page/ErrorPage';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import './App.css';



function App() {
  return (
    <div className="App">

      <Navbar />
      
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/weather' element={<Weather />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes> 
      
      <Footer/>
    </div>
  );
}


export default App;
