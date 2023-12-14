import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-900 via-gray-700 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-300'>About</p>
        </div>
        <p className='text-xl mt-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil ipsam vero fugiat inventore iure, ut voluptas cumque, molestias nobis vel! Facere minima nemo eos nostrum repellat quam possimus doloribus aliquid quis impedit minus, molestiae doloremque hic illum sequi. Itaque voluptates explicabo natus obcaecati similique labore tenetur nobis tempore consequuntur.</p>
        <br />
        <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil ipsam vero fugiat voluptates explicabo natus obcaecati similique labore tenetur nobis tempore consequuntur.</p>
      </div>
    </div>
  )
}

export default About
