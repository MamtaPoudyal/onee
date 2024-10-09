import React from 'react';
import './css/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App=()=> 
{
  return (
    <div className="app-container">
    <Header/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;
