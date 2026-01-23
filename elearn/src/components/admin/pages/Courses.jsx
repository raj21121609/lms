import React, { useEffect } from 'react'
import { NavLink } from 'react-router'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router'

const Courses = () => {
  const navStyle = ({isActive})=>{
          return isActive
          ? "text-xl text-blue-500 border-b-2 border-blue-500 py-2"
          : "text-xl py-2"
        }

        const navigate = useNavigate()

        useEffect(()=>{
          navigate('/admin/courses/Commision')
        },[])
  return (
    <div>
      <div className='text-3xl font-[500] box-border'>Introduction to UI/UX</div>
      <div className='flex gap-8 mt-5 ml-3 border-b-1 border-gray-300 pr-3'>
        <NavLink className={navStyle} to='/admin/courses/Commision' >Commision</NavLink>
        <NavLink className={navStyle} to='/admin/courses/Reviews'>Reviews</NavLink>
        <NavLink className={navStyle} to='/admin/courses/Costumer'>Costumer</NavLink>
        <NavLink className={navStyle} to='/admin/courses/Chapters'>Chapters</NavLink>
        <NavLink className={navStyle} to='/admin/courses/Promotion'>Promotion</NavLink>
        <NavLink className={navStyle} to='/admin/courses/Detail'>Detail</NavLink>
        <NavLink className={navStyle} to='/admin/courses/Settings'>Settings</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Courses
