import React from 'react'
import {MdOutlineKeyboardArrowRight } from 'react-icons/md'
import HeroImage from '../assets/glenn-carstens-peters-P1qyEf1g0HU-unsplash.jpg'
// C:\Users\bhara\Desktop\portfolio\frontend\src\assets\

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-slate-800 via-black' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  lg:gap-3'>
        <div className='flex flex-col justify-center h-full w-3/5'>
            <h2  className='text-4xl sm:text-7xl font-bold text-white'> I'm a <span>Full Stack</span> Developer</h2>
            <p className='text-gray-400 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Tempore rem sed temporibus accusamus nobis aspernatur magnam voluptatibus culpa 
            ex mollitia. Voluptas repellat expedita molestias!
            </p>
            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to to-blue-500 cursor-pointer'>
                    Protfolio 
                    <span className='group-hover:rotate-90 duration-300 '>
                        <MdOutlineKeyboardArrowRight size={25}/>
                    </span>
                </button>
            </div>
        </div>
        <div className='w-2/5'>
            <img src='https://avatars.githubusercontent.com/u/117626243?v=4' alt="myImages"
            className='rounded-2xl mx-auto w-full md:w-full'
            />
        </div>
      </div>
    </div>
  )
}

export default Home
