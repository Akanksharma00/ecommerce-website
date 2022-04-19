import React,{useState} from 'react';

import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';
import Cart from '../Components/Cart/Cart';
import MusicSection from '../Components/storeComponents/MusicSection';
import CartContextProvider from '../store/CartContextProvider';

const Store = (props) => {
    const [showModal, setShowModal] = useState(false);

    const showCartHandler = () => {
        setShowModal(true);
    }; 

    const hideCartHandler = () => {
        setShowModal(false);
    }

    return(
        <CartContextProvider>
            {showModal && <Cart onHideCart={hideCartHandler}/>}
            <Navbar onShowCart={showCartHandler} />
            <MusicSection />
        </CartContextProvider>
    );
};

export default Store;