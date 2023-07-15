import React from 'react';
import './Button.css'

interface IButtonProps {
    children: React.ReactNode
    onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({children, ...props}: IButtonProps) => {
    return (
        <button className='btn' {...props}>{children}</button>
    )
}