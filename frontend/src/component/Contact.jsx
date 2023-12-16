import React from 'react'

function Contact() {
  return (
    <div name='portfolio ' className='bg-gradient-to-b from-black to-gray-800 text-yellow-50 w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl fotn-bold inline border-b-4 border-gray-500'>Contact Me</p>
          <p className='py-6'>Touch with me submit the form</p>
        </div>

        <div className='flex  items-center justify-center'>
            <form action="" className='flex flex-col gap-4 w-full md:w-1/2'>
                <input type="text"  name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="text"  name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="number"  name='phoneno' placeholder='Enter your phone no' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name="message" placeholder='Enter your thoughts'  rows="5" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer'>
                    Let's Talk
                </button>
            </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
