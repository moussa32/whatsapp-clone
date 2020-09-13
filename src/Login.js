import React from 'react';
import {Button } from '@material-ui/core';
import './Login.css';
import {auth, provider} from './firebase';
import { actionTypes } from './reducer.js';
import { useStateValue } from './StateProvider';

function Login(){
  const [{}, dispatch] = useStateValue();

  const signIn = () =>{
    auth
      .signInWithPopup(provider)
      .then(result => {dispatch({
          type:actionTypes.SET_USER,
          user:result.user
        })
      })
      .catch(error => alert(error.message));
  };

  return(
    <div className="login">
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="whatsapp clone"/>
        <div className="login__text">
        <h1>Login to whatsapp</h1>
        </div>
        <Button onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
