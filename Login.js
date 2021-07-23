import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './Firebase';
import { login } from "./features/counter/userSlice";
import "./Login.css";
import { useDispatch } from "react-redux";

function Login() {
    const dispatch = useDispatch();
    
    const signIn = () => {
       auth.signInWithPopup(provider)
       .then(({ user }) => {
           dispatch(login({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoURL,
            })
           );
       })
       .catch((error) => alert(error.message));
        };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="" />
                <Button  variant="contain" color="primary" onClick={signIn} >Login</Button>
            </div>
        </div>
    )
}

export default Login;
