import React from 'react'
import bag from '../../assets/categories/bag.png'
import dev from '../../assets/categories/dev.png'
import phy from '../../assets/categories/phy.png'
import scope from '../../assets/categories/scope.png'

const Categories = () => {
  return (<>
    <div>
      <div className='flex justify-between px-20'><div className='text-xl font-[500]'>Top Categories</div>
      <div className='text-blue-600'>See All</div></div><br />
      <div className='px-20 flex gap-16'>
        <div className='flex flex-col justify-center items-center h-[240px] w-[260px] w-8 rounded-2xl border-gray-300 shadow-md shadow-blue-200 border-2 '>
            <div><div className='bg-blue-200 rounded-full h-21 w-21 mb-3 flex justify-center items-center'>
              <img src={scope} className='w-12' alt="" /></div></div>
            <div className='text-xl font-[400]'>Astrology</div>
            <div className='text-gray-700'>11 Courses</div>
        </div>
        <div className='flex flex-col justify-center items-center h-[240px] w-[260px] w-8 rounded-2xl border-gray-300 shadow-md shadow-blue-200 border-2 '>
            <div><div className='bg-blue-200 rounded-full h-21 w-21 mb-3 flex justify-center items-center'>
              <img src={dev} className='w-12' alt="" /></div></div>
            <div className='text-xl font-[400]'>Development</div>
            <div className='text-gray-700'>12 Courses</div>
        </div>
        <div className='flex flex-col justify-center items-center h-[240px] w-[260px] w-8 rounded-2xl border-gray-300 shadow-md shadow-blue-200 border-2 '>
            <div><div className='bg-blue-200 rounded-full h-21 w-21 mb-3 flex justify-center items-center'>
              <img src={bag} className='w-12' alt="" /></div></div>
            <div className='text-xl font-[400]'>Marketing</div>
            <div className='text-gray-700'>12 Courses</div>
        </div>
        <div className='flex flex-col justify-center items-center h-[240px] w-[260px] w-8 rounded-2xl border-gray-300 shadow-md shadow-blue-200 border-2 '>
            <div><div className='bg-blue-200 rounded-full h-21 w-21 mb-3 flex justify-center items-center'>
              <img src={phy} className='w-12' alt="" /></div></div>
            <div className='text-xl font-[400]'>Physics</div>
            <div className='text-gray-700'>14 Courses</div>
        </div>
      </div>
      
    </div>
    <div className='h-28'></div>
    </>
  )
}

export default Categories
