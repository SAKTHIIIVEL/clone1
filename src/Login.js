import React from 'react'
import "./login.css";
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
    const [state , dispatch] = useStateValue();

    const signIn = ()=>{
        //sign in .....
        signInWithPopup(auth, provider)
        .then((result) => {

          dispatch({
            type : actionTypes.SET_USER,
            user: result.user
          })

        })
        .catch((error) => {
          alert(error.message);
        });
    };
  return (
    <div className='login_'>
        <div className='login_logo'>
            <img src={`${process.env.PUBLIC_URL}/Challenger.svg`} alt='logo' className='imgLogo'/>
            <img src={`${process.env.PUBLIC_URL}/mylogo.png`}alt='name' />
        </div>
        <Button type='submit' onClick={signIn}>Sign In</Button>

    </div>
  )
}

export default Login