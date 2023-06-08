import React from 'react';
import Input from "../UI/input/Input";
import {Button} from "../UI/button/Button";
import {IAuthInfo} from "../models/IAuthInfo";

interface LoginFormProps {
    authInfo: IAuthInfo;
    setAuthInfo: (value: IAuthInfo) => void;
    signIn: () => void;
}

const LoginForm = ({authInfo, setAuthInfo, signIn}: LoginFormProps) => {

    const handlerSignIn = (e: React.MouseEvent) => {
        e.preventDefault();
        signIn();
    }

    return (
        <form className='authForm'>
            <div className='auth-input-section'>
                <label>Login: </label>
                <Input
                    type='text'
                    placeholder='Enter your login...'
                    value={authInfo.login}
                    onChange={(e) => setAuthInfo({...authInfo, login: e.target.value})}
                />
            </div>
            <div className='auth-input-section'>
                <label>Password: </label>
                <Input
                    type='password'
                    placeholder='Enter your login...'
                    value={authInfo.password}
                    onChange={(e) => setAuthInfo({...authInfo, password: e.target.value})}
                />
            </div>
            <div className='auth-btn'>
                <Button onClick={handlerSignIn}>Sign in</Button>
            </div>
        </form>
    );
};

export default LoginForm;