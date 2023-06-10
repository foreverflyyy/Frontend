import React, {useState} from 'react'
import LoginForm from "../components/LoginForm";
import {IAuthInfo} from "../models/IAuthInfo";
import {useActions} from "../store/actions";
import '../styles/Login.css'

const Login = () => {

    const [authInfo, setAuthInfo] = useState<IAuthInfo>({login: '', password: ''});
    const {logout} = useActions();

    const requestSignIn = () => {
        console.log(`user: ${authInfo.login}, pass: ${authInfo.password}`);
        logout();
    }

    return (
        <div>
            <LoginForm authInfo={authInfo} setAuthInfo={setAuthInfo} signIn={requestSignIn}/>
        </div>
    )
}

export default Login;