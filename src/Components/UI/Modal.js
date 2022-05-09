import React from 'react';
import ReactDOM  from 'react-dom';

import style from './Modal.module.css';

const ModalOverlay = (props) => {
    return (
        <div className={style.modalOverlay}>
            <div className={style.modalContent}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    // console.log(props);
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById('overlay-root')
            )};
        </React.Fragment>
    );
};

export default Modal;