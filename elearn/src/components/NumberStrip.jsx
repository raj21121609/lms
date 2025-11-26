import React from 'react'
import CountUp from './animations/CountUp'

const NumberStrip = () => {

  return (
    <>
    <div className='bg-[#EBEBEE] h-[200px] px-14 flex items-center justify-around'>
      <div>
        <div className='text-center text-2xl font-semibold'><CountUp
          from={0}
          to={250}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />+</div>
        <div>Courses by our best mentors</div>
      </div>
      <div className='bg-[#2C3E50] h-15 w-[1px]'></div>
      <div>
        <div className='text-center text-2xl font-[600]'><CountUp
          from={0}
          to={1000}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />+</div>
        <div>Courses by our best mentors</div>
      </div>
      <div className='bg-[#2C3E50] h-15 w-[1px]'></div>
      <div>
        <div className='text-center text-2xl font-[600]'><CountUp
          from={0}
          to={15}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />+</div>
        <div>Courses by our best mentors</div>
      </div>
      <div className='bg-[#2C3E50] h-15 w-[1px]'></div>
      <div>
        <div className='text-center text-2xl font-[600]'><CountUp
          from={0}
          to={2400}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />+</div>
        <div>Courses by our best mentors</div>
      </div>
    </div>
    <div className='h-[100px]'></div>
  </>
  )
}

export default NumberStrip