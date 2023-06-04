import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 bg-gray-500 text-white'>
        <h3>Best search page</h3>
        <span>
            <Link to='/' className='mr-2'>Home</Link>
            <Link to='/favourite'>Favourite</Link>
        </span>
    </nav>
  )
}
