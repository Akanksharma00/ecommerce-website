import React,{useContext, useRef} from 'react';
import {useHistory} from 'react-router-dom';

import AuthContext from '../store/auth-context';

const Login = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const enteredEmailRef = useRef();
    const enteredPasswordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const email = enteredEmailRef.current.value;
        const password = enteredPasswordRef.current.value;

        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4jAY0A3O1vbO0oReZwhsIZyRhVC_oZ3U',
        {
            method: 'POST',
            body: JSON.stringify({
                email:email,
                password:password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                res.json().then((data)=> {
                    console.log(data.idToken);
                    const token = data.idToken;
                    authCtx.login(token);
                    history.replace('/dynamicStore');
                });
            }else{
                return res.json().then((data) => {
                    console.log(data);
                    alert('Authentication failed!')
                })
            }
        });
    }

    return(<div>
        <h2>Login Form</h2>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' ref={enteredEmailRef}/>
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' ref={enteredPasswordRef}/>
            </div>
            <button>Login</button>
        </form>
    </div>)
};

export default Login;