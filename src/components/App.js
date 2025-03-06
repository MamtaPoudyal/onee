import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContactPage from './ContactPage'; // Import ContactPage

import Body from './Body';
import Header from './Header';
import Responsivemenu from './Responsivemenu';
import Menu from './Menu';
import OrderPage from './OrderPage';
import OrderDetails from './OrderDetails'; // Import the new OrderDetails component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <Responsivemenu/>
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </div> 
     <Footer />
    </div>
    </Router>
  );
}

export default App;
