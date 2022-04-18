import React,{useState} from 'react';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import MusicSection from './Components/storeComponents/MusicSection';

import './App.css';


function App() {
  const [showModal, setShowModal] = useState(false);

  const showCartHandler = () => {
    setShowModal(true);
  }; 

  const hideCartHandler = () => {
    setShowModal(false);
  }

  return (
    <React.Fragment>
      {showModal && <Cart onHideCart={hideCartHandler}/>}
      <Navbar onShowCart={showCartHandler} />
      <Header/>
      <MusicSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
