import React from 'react'
import "./Login.css"
import XIcon from "@mui/icons-material/X";
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const Login = ({setIsAuth}) => {
    const navigate = useNavigate();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/")
        })
    }

  return (
    <div className='login__container'>
        <XIcon className="sidebar__xIcon" />
        <h1>全ての話題が、<br />
            ここに。
        </h1>
        <p>今すぐ参加しましょう。</p>
        <button onClick={loginWithGoogle}><GoogleIcon className='login__googleIcon'/>Googleでログインする</button>
    </div>
  )
}

export default Login
