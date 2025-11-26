import React from 'react'
import quo from '../assets/courses/quo.png'

const Comments = () => {
  return (
    <>
    <div className='bg-[#EBEBEE] h-[450px] px-20'>
        <div className='flex justify-between pt-17'>
            <div className='text-xl font-[500]'>What Our Customer Say <br /> About Us</div>
            <div className='bg-amber-800'>dabba</div>
        </div>
        <div>
            <div className='py-5 px-4 mt-8 rounded-lg border-2 border-gray-200 shadow-lg shadow-gray-300 bg-white h-[200px] w-[320px]'>
                <img className='w-[27px]' src={quo} alt="" />
                <div className='text-[13px] font-[400]'>"Myway's tech courses are top-notch! As someone <br />
                who's always looking to stay ahead in the rapidly <br /> evolving tech world,I apreciate the up-to-date <br /> content and engaging multimedia  
                </div>
                <div>por</div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Comments
