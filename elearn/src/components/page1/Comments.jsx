import React from 'react'
import quo from '../../assets/courses/quo.png'
import jane from '../../assets/courses/jane.png'

const Comments = () => {
  return (
    <>
    <div className='bg-[#EBEBEE] h-[450px] px-20'>
        <div className='flex justify-between pt-17'>
            <div className='text-xl font-[500]'>What Our Customer Say <br /> About Us</div>
            <div className='bg-amber-800'>dabba</div>
        </div>
        <div className='flex justify-between'>
            <div className='py-7 px-7 mt-8 rounded-lg border-2 border-gray-200 shadow-lg shadow-gray-300 bg-white h-[230px] w-[390px]'>
                <img className='w-[33px]' src={quo} alt="" />
                <div className='text-[14px] mt-2 font-[400]'>"Myway's tech courses are top-notch! As someone<br />
                who's always looking to stay ahead in the rapidly <br /> evolving tech world,I apreciate the up-to-date <br /> content and engaging multimedia  
                </div>
                <div className='flex items-center mt-2'>
                  <div className='rounded-full bg-red-700 w-[45px] h-[45px] mr-3 '><img src={jane} alt="" /></div>
                  <div>
                    <div className='text-[20px] font-[400]'>Jane Doe</div>
                    <div >Designer</div>
                  </div>
                </div>
            </div>
            <div className='py-7 px-7 mt-8 rounded-lg border-2 border-gray-200 shadow-lg shadow-gray-300 bg-white h-[230px] w-[390px]'>
                <img className='w-[33px]' src={quo} alt="" />
                <div className='text-[14px] mt-2 font-[400]'>"Myway's tech courses are top-notch! As someone<br />
                who's always looking to stay ahead in the rapidly <br /> evolving tech world,I apreciate the up-to-date <br /> content and engaging multimedia  
                </div>
                <div className='flex items-center mt-2'>
                  <div className='rounded-full bg-red-700 w-[45px] h-[45px] mr-3 '><img src={jane} alt="" /></div>
                  <div>
                    <div className='text-[20px] font-[400]'>Jane Doe</div>
                    <div >Designer</div>
                  </div>
                </div>
            </div>
            <div className='py-7 px-7 mt-8 rounded-lg border-2 border-gray-200 shadow-lg shadow-gray-300 bg-white h-[230px] w-[390px]'>
                <img className='w-[33px]' src={quo} alt="" />
                <div className='text-[14px] mt-2 font-[400]'>"Myway's tech courses are top-notch! As someone<br />
                who's always looking to stay ahead in the rapidly <br /> evolving tech world,I apreciate the up-to-date <br /> content and engaging multimedia  
                </div>
                <div className='flex items-center mt-2'>
                  <div className='rounded-full bg-red-700 w-[45px] h-[45px] mr-3 '><img src={jane} alt="" /></div>
                  <div>
                    <div className='text-[20px] font-[400]'>Jane Doe</div>
                    <div >Designer</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Comments
