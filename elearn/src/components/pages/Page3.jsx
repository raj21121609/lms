import React from 'react'
import Nav2 from '../page2/Nav2'
import Intro from '../page3/Intro'
import Comments from '../page1/Comments'
import Courses from '../page1/Courses'
import Footer from '../page1/Footer'
import ClickSpark from '../animations/ClickSpark'
const Page3 = () => {
  return (
    <>
    <ClickSpark
        sparkColor="#4A90E2"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Nav2/>
        <Intro/>
        <Comments/>
        <div className='h-16 w-full'></div>
        <Courses text="More Courses Like This"/>
        <Footer/>
      </ClickSpark>

    
    </>
  )
}

export default Page3
