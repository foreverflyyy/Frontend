import React from 'react';
import './Input.css'

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({...props}: InputProps) => {
    return (
        <input className='input' {...props}/>
    );
};

export default Input;