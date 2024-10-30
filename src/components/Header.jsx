import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='fixed w-full z-10 flex justify-around items-center p-4 text-xl text-gray-500 border-2 font-semibold bg-white'>
        <div className='font-bold text-3xl' >
            <Link to = "/deshboard"> your<span className='text-red-500'>Logo</span></Link>
        </div>
        <div>
            <Link to = "/home" >Home</Link>
        </div>
        <div className='flex gap-x-6'>
            <Link to="/login">
                <button className='bg-green-400 px-4 py-1 rounded-lg text-white text-base'>Login</button>
            </Link>
            <Link to="/signup">
                <button className='bg-green-400 px-4 py-1 rounded-lg text-white text-base'>Sign Up</button>
            </Link>
        </div>
    </div>
  )
}

export default Header