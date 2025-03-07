"use client"

import Link from 'next/link'
import React from 'react'

const CustomNavbar = () => {
  return (
   <nav className='bg-blue-400 h-14 rounded-lg m-3 py-2 px-3 text-xl flex justify-between items-center'>
        <div className='brand p-3'>
            <h1 className='font-bold text-red-400'>
                <Link href="/">Work Manager</Link>
            </h1>
        </div>

        <div className=''>
            <ul className='flex space-x-7'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/addtask">AddTask</Link></li>
                <li><Link href="/showtask">ShowTasks</Link></li>
            </ul>
        </div>

        <div className='pr-3'>
            <ul className='flex space-x-7 text-violet-800 font-semibold'>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">SignUp</Link></li>
            </ul>
        </div>
   </nav>
  )
}

export default CustomNavbar