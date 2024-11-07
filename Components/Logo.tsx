import React from 'react'

import { GiGreatPyramid } from "react-icons/gi";

import { FaGoodreadsG } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { RiSpotifyFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";

const Logo = () => {
  return (

    <div className='max-w-[1240px] pt-4  md:pb-14 mx-auto my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 cursor-pointer'>
   
    <div className='flex items-center space-x-4'>
      <div className='text-3xl sm:text-4xl md:text-4xl text-red-500'>
        <FaGoodreadsG />
      </div>
      <h1 className='text-lg sm:text-xl md:text-4xl p-2 '>
        Gaana
      </h1>
    </div>
   <div className='flex items-center space-x-4 '>
      <div className='text-3xl sm:text-4xl md:text-5xl text-purple-400 text-green-300'>
        <GiGreatPyramid />
      </div>
      <h1 className='text-lg sm:text-xl md:text-3xl p-2 text-purple-400'>
       Jiosaavn
      </h1>
    </div>
  
    
    <div className='flex items-center space-x-4'>
      <div className='text-3xl sm:text-4xl md:text-5xl text-white'>
        <RiAppleLine />
      </div>
      <h1 className='text-lg sm:text-xl md:text-3xl p-2'>
        AppleMusic
      </h1>
    </div>
  
   
    <div className='flex items-center space-x-4'>
      <div className='text-3xl sm:text-4xl md:text-5xl text-purple-300 text-green-400'>
        <RiSpotifyFill />
      </div>
      <h1 className='text-lg sm:text-xl md:text-3xl p-2 text-purple-300'>
        Spotify
      </h1>
    </div>
    <div className='flex items-center space-x-4'>
      <div className='text-3xl sm:text-4xl md:text-4xl text-red-500'>
        <IoLogoYoutube  />
      </div>
      <h1 className='text-lg sm:text-xl md:text-4xl p-2 '>
        YouTube
      </h1>
    </div>
  </div>
  
 
  )
}

export default Logo
