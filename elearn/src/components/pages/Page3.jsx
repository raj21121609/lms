import React from 'react'
import Nav2 from '../page2/Nav2'
import Intro from '../page3/Intro'
import Comments from '../page1/Comments'
import Courses from '../page1/Courses'
import Footer from '../page1/Footer'
const Page3 = () => {
  return (
    <>
    <Nav2/>
    <Intro/>
    <Comments/>
    <div className='h-16 w-full'></div>
    <Courses text="More Courses Like This"/>
    <Footer/>
    </>
  )
}

export default Page3
