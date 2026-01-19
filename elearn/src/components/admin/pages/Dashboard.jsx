import React from 'react'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <>
    <div className='flex justify-between mr-3 mt-3'>
      <div className='text-2xl font-[600]'>Dashboard</div>
      <div className='flex gap-2 justify-baseline'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md '>Add Course</button>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Dashboard
