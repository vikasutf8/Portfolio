import React from 'react'
import google from '../assets/react.svg'
const Protfolio = () => {

  const protfolio =[
    {
      id:1,
      src:google,
      demolink:"https://react.dev/",
      codelink :"https://react.dev/",
    },
    {
      id:2,
      src:google,
      demolink:"https://react.dev/",
      codelink :"https://react.dev/",
    },
    {
      id:3,
      src:google,
      demolink:"https://react.dev/",
      codelink :"https://react.dev/",
    },
    {
      id:4,
      src:google,
      demolink:"https://react.dev/",
      codelink :"https://react.dev/",
    },
    {
      id:5,
      src:google,
      demolink:"https://react.dev/",
      codelink :"https://react.dev/",
    },
    {
      id:6,
      src:google,
      demolink:"https://react.dev/",
      codelink :"https://react.dev/",
    },
   
  ]


  return (
    <div name='portfolio ' className='bg-gradient-to-b from-black to-gray-800 text-yellow-50 w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl fotn-bold inline border-b-4 border-gray-500'>Protfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

      

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:p-1'>
          {protfolio.map(({id,src,demolink,codelink})=>(
            <div key={id} className='shadow-md shadow-gray-700 rounded-md'>
            <img src={src} alt="recct project" className='mx-auto w-10 h-10 rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-between '>
              <button className='w-1/2 px-4 py-3 m-4 duration-200 hover:scale-150' > Demo</button>
              <button className='w-1/2 px-4 py-3 m-4 duration-200 hover:scale-150'>Code</button>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Protfolio
