import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {

    const [nav,setNav] =useState(false)

    const links =[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'Portfolio'
        },
        {
            id:4,
            link:'Experience'
        },
        {
            id:5,
            link:'Contact'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
        <div>
            <h1 className='font-signature text-5xl'>Vikas Arya</h1>
        </div>
      <ul className='md:flex hidden '>
        {links.map((link)=>(
             <li key={link.id}  className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-200 '> {link.link}</li>
        ))}
      </ul>

      <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      onClick={()=> setNav(!nav)}
      >
       {
        nav?  <FaTimes size={30}/> : <FaBars size={30}/>
       }
      </div>

       {nav &&(
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>
             {links.map((link)=>(
                    <li key={link.id}  className='px-4 cursor-pointer capitalize py-4 text-3xl hover:scale-125 duration-200'> {link.link}</li>
               ))}
       
             </ul>
       )}
    </div>
  )
}

export default Navbar
