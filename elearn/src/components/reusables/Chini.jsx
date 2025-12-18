import React from 'react'
import china from '../../assets/courses/china.png'
import { Mail } from 'lucide-react'

const Chini = () => {
  return (
    <>
    <div className='w-[260px] p-5 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg '>
      <img src={china} className='w-full' alt="" />
      <div className='text-2xl font-[600] mt-2 text-center'>Ronalds Richards</div>
      <div className='mt-2 text-center'>UI/UX Designer</div>
      <div className='h-[2px] bg-gray-200 my-2'></div>
      <div className='flex justify-center'>
        <button className='flex mt-2 justify-center gap-2 bg-blue-500 w-full py-2 rounded-lg text-white'><div>Send Message</div> <Mail /></button>
      </div>
    </div>
    </>
  )
}

export default Chini
