import React, { useState } from 'react';
import video from '../../assets/3209298-uhd_3840_2160_25fps.mp4';
import { Video ,Award ,GraduationCap, Play } from 'lucide-react';
import smile from "../../assets/smile.png";
import Courses from '../page1/Courses';

const Vid = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

  const [isActive, setisActive] = useState(false)

  return (
    <>
      <div className='flex w-full px-20'>
        <div className='w-[65%]'>
          <div className='py-4 text-2xl font-[600]'>
            Introduction to User Experience Design
          </div>
          <video src={video} controls className='rounded-lg'></video>
          <div className="flex gap-4 my-4">
            {["Description", "Instructor", "Syllabus", "Reviews"].map((tab) => (
              <button
                key={tab}
                className={` border-2 border-gray-300 p-4 w-[120px] rounded-lg ${isActive? "bg-blue-300 text-white": "text-black bg-white"}  `}
                onClick={()=>setisActive(!isActive)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-2xl font-[600]">Course Overview</div>
            <div className="text-gray-800 leading-relaxed mt-2">
              Embark on a transformative journey into the dynamic world of User Experience (UX) Design with our <br /> comprehensive course, "Introduction to User Experience Design." This course is meticulously crafted to <br /> provide you with a foundational understanding of the principles, methodologies, and tools that drive <br /> exceptional user experiences in the digital landscape.
            </div>
          </div>

           <div className="mt-8">
            <div className="text-2xl font-[600]">Key Learning Objectives</div>
            <div className="text-gray-800 leading-relaxed mt-2 pl-3">
              ◉ Gain a clear understanding of what User Experience (UX) Design entails and its importance in today's digital. <br /> world <br />
              
              ◉ Explore the fundamental principles of user-centered design and how to apply them to create intuitive and <br /> user-friendly interfaces. <br />

              ◉ Learn about the various elements that contribute to a positive user experience, including information  <br />architecture, interaction design, and visual design.. <br />
            </div>
          </div> 

          <div className="mt-4">
            <div className="text-2xl font-[600] mb-6">Instructor</div>
            <div className="text-2xl font-[500] text-blue-800">Ronald Richards</div>
            <div className="text-xl text-gray-700">UI/UX Designer</div>

            <div className="flex mt-4">
              <img src={smile} className="mr-4" alt="" />
              <div>
                <div className="flex gap-3">
                  <Award /> 40,445 Reviews
                </div>
                <div className="flex gap-3">
                  <GraduationCap /> 500 Students
                </div>
                <div className="flex gap-3">
                  <Play /> 15 Courses
                </div>
              </div>
            </div>
          </div>


        </div>


        

        <div className='w-[35%] py-15'>
          <div className=' w-[400px] mx-6 bg-gray-200 rounded-xl border-2 border-gray-300 p-4'>
            <div className='text-2xl font-[600]'>Course Completion</div>
            <div className='cursor-pointer mt-3 font-[400] flex gap-3' onClick={()=>{
              setOpen(!open)
            }}>{open?<span>▲</span>:<span>▼</span>} Introduction to UX Design</div>
            <div className='w-full bg-gray-300 h-[2px] my-2'></div>
            {open && (<>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>1. What is User Experience {'(UX)'} Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>2. Historical Overview of UX Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>3. Understanding User-Centered Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>4. The Role of UX Design in Digital Product</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>5. Introduction to UX Design Tools and Techniques</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
            </>  
            )}

            <div className='cursor-pointer mt-3 font-[400] flex gap-3' onClick={()=>{
              setOpen2(!open2)
            }}>{open2?<span>▲</span>:<span>▼</span>} Basics of User-Centered Design</div>
            <div className='w-full bg-gray-300 h-[2px] my-2'></div>
            {open2 && (<>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>1. What is User Experience {'(UX)'} Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>2. Historical Overview of UX Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>3. Understanding User-Centered Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>4. The Role of UX Design in Digital Product</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>5. Introduction to UX Design Tools and Techniques</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
            </>  
            )}


            <div className='cursor-pointer mt-3 font-[400] flex gap-3' onClick={()=>{
              setOpen3(!open3)
            }}>{open3?<span>▲</span>:<span>▼</span>} Elements of User Experience</div>
            <div className='w-full bg-gray-300 h-[2px] my-2'></div>
            {open3 && (<>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>1. What is User Experience {'(UX)'} Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>2. Historical Overview of UX Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>3. Understanding User-Centered Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>4. The Role of UX Design in Digital Product</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>5. Introduction to UX Design Tools and Techniques</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
            </>  
            )}


            <div className='cursor-pointer mt-3 font-[400] flex gap-3' onClick={()=>{
              setOpen4(!open4)
            }}>{open4?<span>▲</span>:<span>▼</span>} Visual Design Principles</div>
            <div className='w-full bg-gray-300 h-[2px] my-2'></div>
            {open4 && (<>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>1. What is User Experience {'(UX)'} Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>2. Historical Overview of UX Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>3. Understanding User-Centered Design</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>4. The Role of UX Design in Digital Product</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
              <div className='flex gap-2 py-2 my-3'>
                <input className='w-5' type="checkbox" name="" id="" />
                <div className='text-[17px]'>5. Introduction to UX Design Tools and Techniques</div>
                <div className='flex gap-1'>
                  <Video className='text-gray-400' />
                  <div className='text-gray-400 flex gap-1'><div>4</div><div>min</div></div>
                </div>
              </div>
            </>  
            )}


          </div>
        </div>
      </div>
      <div className='h-4 w-full'></div>
      <div className='bg-[#EBEBEE] pt-4 mt-4 '>
        <div className='h-8 w-full'></div>
        <Courses text="More Courses Like This"/>
      </div>
    </>
  ); 
};

export default Vid;
