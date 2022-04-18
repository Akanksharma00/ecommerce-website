import React from 'react';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import MusicSection from './Components/storeComponents/MusicSection';

import './App.css';


function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Cart />
      <Header />
      {/* <MusicSection /> */}
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
