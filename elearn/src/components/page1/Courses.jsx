import React from 'react'
import laptop from '../../assets/courses/laptop.png'

const Courses = (props) => {
  return (
    <>
    
    <div className='flex justify-between px-20 mb-8'>
        <div className='text-xl font-[500]'>{props.text}</div>
        <div className='text-blue-600'>See All</div>
    </div>
    <div className='px-20 flex justify-between'>
        <div className='h-[283px] w-[260px] p-3 border-2 rounded-xl shadow-lg border-gray-200 shadow-gray-100 flex bg-white flex-col'>
            <img src={laptop} className='h-[140px] ' alt="" />
            <div className='pt-2 font-[500]'>Beginner's Guide to Design</div>
            <div className='text-[14px] text-gray-700'>By Ronald Richards</div>
                <div className="rating flex flex-row gap-1 text-2xl w-fit">
                <input type="radio" id="star5" name="rate" value="5" checked class="hidden peer/star5" />
                <label htmlForfor="star5" class="cursor-pointer text-yellow-400 peer-hover/star5:text-yellow-500 peer-checked/star5:text-yellow-500">★</label>

                <input type="radio" id="star4" name="rate" value="4" checked class="hidden peer/star4" />
                <label htmlFor="star4" class="cursor-pointer text-yellow-400 peer-hover/star4:text-yellow-500 peer-checked/star4:text-yellow-500">★</label>

                <input type="radio" id="star3" name="rate" value="3" checked class="hidden peer/star3" />
                <label htmlFor="star3" class="cursor-pointer text-yellow-400 peer-hover/star3:text-yellow-500 peer-checked/star3:text-yellow-500">★</label>

                <input type="radio" id="star2" name="rate" value="2" checked class="hidden peer/star2" />
                <label htmlFor="star2" class="cursor-pointer text-yellow-400 peer-hover/star2:text-yellow-500 peer-checked/star2:text-yellow-500">★</label>

                <input type="radio" id="star1" name="rate" value="1" class="hidden peer/star1" />
                <label htmlFor="star1" class="cursor-pointer text-yellow-400 peer-hover/star1:text-yellow-500 peer-checked/star1:text-yellow-500">★</label>
            </div>

            <div className='text-[13px] text-gray-700'>22 Total Hours. 155 Lectures. Beginner</div>
            <div className='font-[600] pt-1'>₹149</div>
        </div>
        <div className='h-[283px] w-[260px] p-3 border-2 rounded-xl shadow-lg border-gray-200 shadow-gray-100 flex flex-col bg-white'>
            <img src={laptop} className='h-[140px] ' alt="" />
            <div className='pt-2 font-[500]'>Beginner's Guide to Design</div>
            <div className='text-[14px] text-gray-700'>By Ronald Richards</div>
                <div className="rating flex flex-row gap-1 text-2xl w-fit">
                <input type="radio" id="star5" name="rate" value="5" checked class="hidden peer/star5" />
                <label htmlFor="star5" class="cursor-pointer text-yellow-400 peer-hover/star5:text-yellow-500 peer-checked/star5:text-yellow-500">★</label>

                <input type="radio" id="star4" name="rate" value="4" checked class="hidden peer/star4" />
                <label htmlFor="star4" class="cursor-pointer text-yellow-400 peer-hover/star4:text-yellow-500 peer-checked/star4:text-yellow-500">★</label>

                <input type="radio" id="star3" name="rate" value="3" checked class="hidden peer/star3" />
                <label htmlFor="star3" class="cursor-pointer text-yellow-400 peer-hover/star3:text-yellow-500 peer-checked/star3:text-yellow-500">★</label>

                <input type="radio" id="star2" name="rate" value="2" checked class="hidden peer/star2" />
                <label htmlFor="star2" class="cursor-pointer text-yellow-400 peer-hover/star2:text-yellow-500 peer-checked/star2:text-yellow-500">★</label>

                <input type="radio" id="star1" name="rate" value="1" class="hidden peer/star1" />
                <label htmlFor="star1" class="cursor-pointer text-yellow-400 peer-hover/star1:text-yellow-500 peer-checked/star1:text-yellow-500">★</label>
            </div>

            <div className='text-[13px] text-gray-700'>22 Total Hours. 155 Lectures. Beginner</div>
            <div className='font-[600] pt-1'>₹149</div>
        </div>
        <div className='h-[283px] w-[260px] p-3 border-2 rounded-xl shadow-lg border-gray-200 shadow-gray-100 flex flex-col bg-white'>
            <img src={laptop} className='h-[140px] ' alt="" />
            <div className='pt-2 font-[500]'>Beginner's Guide to Design</div>
            <div className='text-[14px] text-gray-700'>By Ronald Richards</div>
                <div class="rating flex flex-row gap-1 text-2xl w-fit">
                <input type="radio" id="star5" name="rate" value="5" checked class="hidden peer/star5" />
                <label htmlForfor="star5" class="cursor-pointer text-yellow-400 peer-hover/star5:text-yellow-500 peer-checked/star5:text-yellow-500">★</label>

                <input type="radio" id="star4" name="rate" value="4" checked class="hidden peer/star4" />
                <label htmlFor="star4" class="cursor-pointer text-yellow-400 peer-hover/star4:text-yellow-500 peer-checked/star4:text-yellow-500">★</label>

                <input type="radio" id="star3" name="rate" value="3" checked class="hidden peer/star3" />
                <label htmlFor="star3" class="cursor-pointer text-yellow-400 peer-hover/star3:text-yellow-500 peer-checked/star3:text-yellow-500">★</label>

                <input type="radio" id="star2" name="rate" value="2" checked class="hidden peer/star2" />
                <label htmlFor="star2" class="cursor-pointer text-yellow-400 peer-hover/star2:text-yellow-500 peer-checked/star2:text-yellow-500">★</label>

                <input type="radio" id="star1" name="rate" value="1" class="hidden peer/star1" />
                <label htmlFor="star1" class="cursor-pointer text-yellow-400 peer-hover/star1:text-yellow-500 peer-checked/star1:text-yellow-500">★</label>
            </div>

            <div className='text-[13px] text-gray-700'>22 Total Hours. 155 Lectures. Beginner</div>
            <div className='font-[600] pt-1'>₹149</div>
        </div>
        <div className='h-[283px] w-[260px] p-3 border-2 rounded-xl shadow-lg border-gray-200 shadow-gray-100 flex flex-col bg-white'>
            <img src={laptop} className='h-[140px] ' alt="" />
            <div className='pt-2 font-[500]'>Beginner's Guide to Design</div>
            <div className='text-[14px] text-gray-700'>By Ronald Richards</div>
                <div className="rating flex flex-row gap-1 text-2xl w-fit">
                <input type="radio" id="star5" name="rate" value="5" checked class="hidden peer/star5" />
                <label htmlFor="star5" class="cursor-pointer text-yellow-400 peer-hover/star5:text-yellow-500 peer-checked/star5:text-yellow-500">★</label>

                <input type="radio" id="star4" name="rate" value="4" checked class="hidden peer/star4" />
                <label htmlFor="star4" class="cursor-pointer text-yellow-400 peer-hover/star4:text-yellow-500 peer-checked/star4:text-yellow-500">★</label>

                <input type="radio" id="star3" name="rate" value="3" checked class="hidden peer/star3" />
                <label htmlFor="star3" class="cursor-pointer text-yellow-400 peer-hover/star3:text-yellow-500 peer-checked/star3:text-yellow-500">★</label>

                <input type="radio" id="star2" name="rate" value="2" checked class="hidden peer/star2" />
                <label htmlFor="star2" class="cursor-pointer text-yellow-400 peer-hover/star2:text-yellow-500 peer-checked/star2:text-yellow-500">★</label>

                <input type="radio" id="star1" name="rate" value="1" class="hidden peer/star1" />
                <label htmlFor="star1" class="cursor-pointer text-yellow-400 peer-hover/star1:text-yellow-500 peer-checked/star1:text-yellow-500">★</label>
            </div>

            <div className='text-[13px] text-gray-700'>22 Total Hours. 155 Lectures. Beginner</div>
            <div className='font-[600] pt-1'>₹149</div>
        </div>
        
    </div>
    <div className='h-24'></div>
    </>
    
  )
}

export default Courses
