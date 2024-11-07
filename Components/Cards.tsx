import React from 'react'

const Cards = () => {
  return (
    <>
     <h1 className="heading py-20">
        My <span className="text-purple">approach</span>
      </h1>
    <div className='   md:grid grid-cols-3 pb-10 gap-7'>
     <div className=' mb-7  relative border border-white text-center px-5 py-5 md:px-10 md:py-20 transition ease-in-out delay-150 hover:scale-110 duration-200 shadow-3xl  rounded-3xl overflow-hidden '>
     <img
      src="/pic-1.jpg" // Replace with the actual image path
      alt="Overlay Image"
      className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 hover:opacity-25"
    />
      <h1 className='font-semibold text-lg md:text-2xl pb-4'>Planning & Strategy</h1>
      <p className='text-sm md:text-lg'>We will collaborate to map out your website goals target audience 
          and key functionalities. We will discuss things like site structure 
          navigation and content requirements.</p>
     </div>
     <div className='mb-7  relative border border-white text-center px-5 py-5 md:px-10 md:py-20 transition ease-in-out delay-150 hover:scale-110 duration-200 shadow-3xl  rounded-3xl overflow-hidden '>
     <img
      src="/pic-2.jpg" // Replace with the actual image path
      alt="Overlay Image"
      className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 hover:opacity-25"
    />
      <h1 className='font-semibold text-lg md:text-2xl pb-4'>Development & Progress Update</h1>
      <p className='text-sm md:text-lg'>Once we agree on the plan I cue my lofi playlist and dive into
          coding. From initial sketches to polished code I keep you updated
          every step of the way.</p>
     </div>
     <div className=' mb-7 relative border border-white text-center px-5 py-5 md:px-10 md:py-20 transition ease-in-out delay-150 hover:scale-110 duration-200 shadow-3xl  rounded-3xl overflow-hidden '>
     <img
      src="/pic-3.jpg" // Replace with the actual image path
      alt="Overlay Image"
      className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 hover:opacity-25"
    />
      <h1 className='font-semibold text-lg md:text-2xl pb-4'>Development & Launch</h1>
      <p className='text-sm md:text-lg'>This is where the magic happens! Based on the approved design 
          I will translate everything into functional code building your website
          from the ground up.</p>
     </div>
    </div>
</>
  )
}

export default Cards
