import React,{useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Store from './Pages/Store';
import About from './Pages/About';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import ProductDetail from './Pages/ProductDetail';

import Header from './Components/Layout/Header';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

import './App.css';

import AuthContext from './store/auth-context';


function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <React.Fragment>
      <Navbar />
      <Header/>
      <main>
        <Switch>
          <Route path="/" exact><Redirect to='/dynamicStore'></Redirect></Route>
          <Route path="/index"><Home /></Route>
          <Route path="/dynamicStore" exact>
            {isLoggedIn && <Store />}
            {!isLoggedIn && <Redirect to='/login' />}
          </Route>
          <Route path='/dynamicStore/:id'><ProductDetail /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/contact"><ContactUs /></Route>
          {!isLoggedIn && <Route path="/login"><Login /></Route>}
          <Route path="*"><Redirect to='/login'/></Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
