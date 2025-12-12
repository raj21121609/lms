import React from 'react'
import Nav2 from '../page2/Nav2'
import Txt from '../page8/Txt'
import Learner from '../reusables/Learner'
import Footer from '../page1/Footer'
import Next from '../page8/Next'

const Page8 = () => {
  return (
    <>
    <Nav2/>
    <Txt/>
    <Next/>
    <div className='h-9 w-full'></div>
    <Learner/>
    <Footer/>
    </>
  )
}

export default Page8
