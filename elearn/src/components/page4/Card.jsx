import React from 'react'
import intro from '../../assets/intro.png'

const Card = () => {
  return (
    <>
    <div className='h-[125px] flex justify-between p-2 my-4 w-[800px] border-1 border-gray-300 rounded-lg'>
        <div className='flex items-center'>
            <div><img src={intro} className='h-26' alt="" /></div>
            <div className='px-2'>
                <div className='text-[20px] font-[500]'>Introduction to User Experience Design </div>
                <div className='text-gray-700'>By John Doe</div>
                <div className='text-[14px] flex items-baseline gap-2'>  
                    <div className="text-yellow-400">4.0</div>
                    <div className="flex text-yellow-400 text-lg mt-1">★★★★☆</div>
                    <div className='text-gray-700'>{'(200 rating)'} |</div>
                    <div>22 Total Hours. 155 Lectures. All levels</div>
                </div>
                <div className='flex gap-2'>
                    <div className='text-blue-500'>Save for later</div>
                    <div className='text-gray-200'>|</div>
                    <div className='text-red-500'> Remove</div>
                </div>
            </div>
        </div>
        <div className='pt-1 pr-3 text-xl font-[600]'>₹149.00</div>
    </div>
    </>
  )
}

export default Card
