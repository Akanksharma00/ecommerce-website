import React from 'react';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import MusicSection from './Components/storeComponents/MusicSection';

import './App.css';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <MusicSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
