import React from 'react'
import logo from '../../assets/image-removebg-preview.png'
import socials from '../../assets/logos.png'

const Footer = () => {
  return (
    <div className='bg-[#1E2A38] flex gap-2 justify-around h-[320px] p-13 text-white w-full'>
      <div>
        <div className='flex items-center'>
          <img src={logo} className='w-16' alt="" />
          <div className='text-white text-xl font-[600]'>Myway</div>
        </div>
        <div className='pl-3 text-gray-300'>Empowering learners through accessible and engaging online <br />education.</div>
        <div className='pl-3 text-gray-300'>Myway is a leading online learning platform dedicated to <br />
        providing high-quality, flexible,and affordable educational <br />experiences.</div>
      </div>
      <div className='leading-7'>
        <div className='text-xl font-[600] pt-2'>Get Help</div>
        <div className='text-gray-300'>Contact Us</div>
        <div className='text-gray-300'>Latest Articles</div>
        <div className='text-gray-300'>FAQS</div>
      </div>
      <div className='leading-7'>
        <div className='text-xl font-[600] pt-2'>Programs</div>
        <div className='text-gray-300'>Art & Design</div>
        <div className='text-gray-300'>Business</div>
        <div className='text-gray-300'>IT & Software</div>
        <div className='text-gray-300'>Languages</div>
        <div className='text-gray-300'>Programming</div>
      </div>
      <div className='leading-7'>
        <div className='text-xl font-[600] pt-2'>Contact Us</div>
        <div className='text-gray-300'>Address: 123 Main Street, Anytown, CA 12345 <br />
        Tel: +(123) 456-7890 <br /> Mail: myway.edu.in</div>
        <div><img src={socials} className='w-[250px] pt-4' alt="" /></div>
      </div>
    </div>
  )
}

export default Footer
5