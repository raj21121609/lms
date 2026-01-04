import React from 'react'
import Tutor from '../page12/Tutor'
import Nav2 from '../page2/Nav2'
import ClickSpark from '../animations/ClickSpark'

const Page12 = () => {
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
        <Tutor/>
      </ClickSpark>
    
    </>
  )
}

export default Page12
