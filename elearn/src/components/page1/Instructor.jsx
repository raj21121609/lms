import React from 'react';
import china from '../../assets/courses/china.png';

const Instructor = (props) => {
  return (
    <div className='px-20'>
      {/* Title + See All */}
      <div className='flex justify-between'>
        <div className='text-xl font-[500]'>{props.text}</div>    
          <div className='text-blue-600 cursor-pointer'>See All</div>
      </div>

      {/* Cards */}
      <div className='pt-8 pb-20 flex justify-between'>

        {/* CARD 1 */}
        <div className='p-4 h-[300px] w-[230px] border-2 bg-white border-gray-200 shadow-gray-100 shadow-lg rounded-xl'>
          <img src={china} alt="" />
          <div className='pt-2 text-center font-[500] text-xl'>Ronalds Richards</div>
          <div className='text-center text-gray-600'>UI/UX Designer</div>
          <div className='h-0.5 mt-4 bg-gray-300'></div>

          <div className='pt-3 flex justify-between items-center'>
            <div className="flex items-center w-fit text-3xl">
              <input type="radio" id="star1a" name="rate1" className="hidden peer/star1a" />
              <label htmlFor="star1a" className="cursor-pointer text-yellow-400 peer-hover/star1a:text-yellow-500 peer-checked/star1a:text-yellow-500 text-2xl">★</label>
              <div className='pl-1 text-[15px] pt-1 font-[400]'>4.9</div>
            </div>
            <div>2400 Students</div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className='p-4 h-[300px] w-[230px] border-2 bg-white border-gray-200 shadow-gray-100 shadow-lg rounded-xl'>
          <img src={china} alt="" />
          <div className='pt-2 text-center font-[500] text-xl'>Ronalds Richards</div>
          <div className='text-center text-gray-600'>UI/UX Designer</div>
          <div className='h-0.5 mt-4 bg-gray-300'></div>

          <div className='pt-3 flex justify-between items-center'>
            <div className="flex items-center w-fit text-3xl">
              <input type="radio" id="star1b" name="rate2" className="hidden peer/star1b" />
              <label htmlFor="star1b" className="cursor-pointer text-yellow-400 peer-hover/star1b:text-yellow-500 peer-checked/star1b:text-yellow-500 text-2xl">★</label>
              <div className='pl-1 text-[15px] pt-1 font-[400]'>4.9</div>
            </div>
            <div>2400 Students</div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className='p-4 h-[300px] w-[230px] border-2 bg-white border-gray-200 shadow-gray-100 shadow-lg rounded-xl'>
          <img src={china} alt="" />
          <div className='pt-2 text-center font-[500] text-xl'>Ronalds Richards</div>
          <div className='text-center text-gray-600'>UI/UX Designer</div>
          <div className='h-0.5 mt-4 bg-gray-300'></div>

          <div className='pt-3 flex justify-between items-center'>
            <div className="flex items-center w-fit text-3xl">
              <input type="radio" id="star1c" name="rate3" className="hidden peer/star1c" />
              <label htmlFor="star1c" className="cursor-pointer text-yellow-400 peer-hover/star1c:text-yellow-500 peer-checked/star1c:text-yellow-500 text-2xl">★</label>
              <div className='pl-1 text-[15px] pt-1 font-[400]'>4.9</div>
            </div>
            <div>2400 Students</div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className='p-4 h-[300px] w-[230px] border-2 bg-white border-gray-200 shadow-gray-100 shadow-lg rounded-xl'>
          <img src={china} alt="" />
          <div className='pt-2 text-center font-[500] text-xl'>Ronalds Richards</div>
          <div className='text-center text-gray-600'>UI/UX Designer</div>
          <div className='h-0.5 mt-4 bg-gray-300'></div>

          <div className='pt-3 flex justify-between items-center'>
            <div className="flex items-center w-fit text-3xl">
              <input type="radio" id="star1d" name="rate4" className="hidden peer/star1d" />
              <label htmlFor="star1d" className="cursor-pointer text-yellow-400 peer-hover/star1d:text-yellow-500 peer-checked/star1d:text-yellow-500 text-2xl">★</label>
              <div className='pl-1 text-[15px] pt-1 font-[400]'>4.9</div>
            </div>
            <div>2400 Students</div>
          </div>
        </div>

        {/* CARD 5 */}
        <div className='p-4 h-[300px] w-[230px] border-2 bg-white border-gray-200 shadow-gray-100 shadow-lg rounded-xl'>
          <img src={china} alt="" />
          <div className='pt-2 text-center font-[500] text-xl'>Ronalds Richards</div>
          <div className='text-center text-gray-600'>UI/UX Designer</div>
          <div className='h-0.5 mt-4 bg-gray-300'></div>

          <div className='pt-3 flex justify-between items-center'>
            <div className="flex items-center w-fit text-3xl">
              <input type="radio" id="star1e" name="rate5" className="hidden peer/star1e" />
              <label htmlFor="star1e" className="cursor-pointer text-yellow-400 peer-hover/star1e:text-yellow-500 peer-checked/star1e:text-yellow-500 text-2xl">★</label>
              <div className='pl-1 text-[15px] pt-1 font-[400]'>4.9</div>
            </div>
            <div>2400 Students</div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Instructor;
