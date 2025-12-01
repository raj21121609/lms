import React from 'react'
import Dropdown from "../reusables/Dropdown";
import Dropdown2 from "../reusables/Dropdown2";
import Course from "../reusables/Course";
import Instructor from "../page1/Instructor";
import Courses from "../page1/Courses";
import Footer from "../page1/Footer";
import { ListFilter } from "lucide-react";

const Others = () => {
  return (
    <>
    <div className="px-20 pt-10">
            <h1 className="text-3xl font-[600]">Design Courses</h1>
            <h5 className="font-[200] p-2 text-xl font-[400]">
              All Development Courses
            </h5>
    
            <div className="pt-1 flex justify-between">
              <button className="flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm text-sm">
                <ListFilter height={16} width={16} /> Filter
              </button>
    
              <div className="flex gap-3 items-center">
                <div>Sort By</div>
                <Dropdown />
              </div>
            </div>
          </div>
    
          <div className="pt-4 px-20 w-full flex gap-6 pb-10">
            
            <div className="w-[25%]">
              <Dropdown2 />
            </div>
    
            <div className="w-[75%] grid grid-cols-3 gap-6">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
            </div>
    
          </div>
    
          <div className="bg-[#EBEBEE] py-7 h-[420px] w-full">
            <Instructor text="Popular Mentors"></Instructor>
          </div>
          <div className="py-7">
            <Courses text="Featured Courses"/> 
          </div>
    
          <Footer/>
          </>
  )
}

export default Others
