import React, {useState} from 'react';
import Input from "../UI/input/Input";
import {Button} from "../UI/button/Button";

interface LoginFormProps {
    //signIn: () => void;
}

const LoginForm = ({}: LoginFormProps) => {

    const [auth, setAuth] = useState({login: '', password: ''})

    return (
        <form className='authForm'>
            <Input
                type='text'
                placeholder='Enter your login...'
                value={auth.login}
                onChange={(e) => setAuth({...auth, login: e.target.value})}
            />
            <Input
                type='password'
                placeholder='Enter your login...'
                value={auth.password}
                onChange={(e) => setAuth({...auth, password: e.target.value})}
            />
            <Button>Sign in</Button>
        </form>
    );
};

export default LoginForm;