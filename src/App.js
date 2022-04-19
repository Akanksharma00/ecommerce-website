import React from 'react';
import {Route} from 'react-router-dom';

import Store from './Pages/Store';
import About from './Pages/About';

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
        <Route path="/dynamicStore"><Store /></Route>
        <Route path="/about"><About /></Route>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
