import React from 'react'
import bird from '../../assets/image-removebg-preview.png'

const Nav3 = () => {
  return (
    <>
    <div className='h-16 w-full bg-gray-800 flex justify-between px-20'>
        <div className='text-white flex items-center'>
            <div><img src={bird} className='h-10 w-10' alt="" /></div>
            <div className='text-white'>Myway</div>
        </div>
        <div className='flex items-center gap-25'>
            <div className='text-white'>★</div>
            <div className='text-white'>Provide Rating</div>
        </div>
    </div>
    </>
  )
}

export default Nav3
