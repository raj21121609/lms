import React from 'react'
import specs from '../../assets/specs.png'

const Txt = () => {
  return (
    <>
    <div className='flex w-full px-20 gap-[90px]'>
        <div className='w-[80%] mt-10'>
          
          <div className='text-gray-800 text-[18px]'>Instuctor</div>
          <div className='text-4xl font-[600] mt-2'>Ronald Richards</div>
          <div className='text-gray-800 text-[19px] mt-1'>Web developer, UI/UX Designer, and teacher</div>
          <div className='flex mt-12 gap-15'>
            <div>
              <div className='text-gray-800'>Total Students</div>
              <div className='text-3xl font-[500]'>1000</div>
            </div>
            <div>
              <div className='text-gray-800'>Reviews</div>
              <div className='text-3xl font-[500]'>154</div>
            </div>
          </div>


          <div className="mt-8">
            <div className="text-2xl font-[600]">About Ronald Richard</div>
            <div className="text-gray-800 leading-relaxed mt-2">
              Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.
            </div>
          </div>


          <div className="mt-8">
            <div className="text-2xl font-[600]">Areas of Expertise</div>
            <div className="text-gray-800 leading-relaxed mt-2 whitespace-pre-line">
              ◉ User Experience (UX) Design <br />
              ◉ User Interface (UI) Design <br />
              ◉ Information Architecture <br />
              ◉ Interaction Design <br />
              ◉ Visual Design <br />
              ◉ Usability Testing <br />
              ◉ Wireframing and Prototyping <br />
              ◉ Design Thinking <br />
              ◉ Professional Experience <br />
            </div>
          </div>


          <div className="mt-8">
            <div className="text-2xl font-[600]">Professional Experience</div>
            <div className="text-gray-800 leading-relaxed mt-2">
              Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as Company Name and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.
            </div>
          </div>3


        </div>
        <div className='w-[20%] h-23 flex flex-col items-center mt-10'>
            <div><img src={specs} className='w-[200px]' alt="" /></div>
            <div className='flex flex-col items-center gap-3 mt-8'>
                <button className='border-2 border-black w-[200px] py-2 rounded-lg'>Website</button>
                <button className='border-2 border-black w-[200px] py-2 rounded-lg'>Instagram</button>
                <button className='border-2 border-black w-[200px] px-4 py-2 rounded-lg'>Youtube</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Txt
