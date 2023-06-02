import React, {FC} from 'react'
import './MyButton.module.css';

interface MyButtonProps {
  children: React.ReactNode
  onClick?: () => void;
}

export const MyButton: FC<MyButtonProps> = ({children, ...props}) => {
  return (
    <button className='btn' {...props}>{children}</button>
  )
}
