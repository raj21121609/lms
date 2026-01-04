import React from 'react'
import Nav3 from '../page7/Nav3'
import Vid from '../page7/Vid'
import Learner from '../reusables/Learner'
import Footer from '../page1/Footer'
import ClickSpark from '../animations/ClickSpark'


const Page7 = () => {
  return (
    <>
    <ClickSpark
        sparkColor="#4A90E2"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Nav3/>
        <Vid/>
        <div className='h-9 w-full'></div>
        <Learner/>
        <Footer/>
      </ClickSpark>
    
    
    </>
  )
}

export default Page7
