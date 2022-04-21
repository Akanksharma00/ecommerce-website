import React from 'react';
import {Route} from 'react-router-dom';

import Store from './Pages/Store';
import About from './Pages/About';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';

import Header from './Components/Layout/Header';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

import './App.css';


function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Header/>
      <main>
        <Route path="/index"><Home /></Route>
        <Route path="/dynamicStore"><Store /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><ContactUs /></Route>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
