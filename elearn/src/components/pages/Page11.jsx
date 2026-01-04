import React from 'react'
import Nav2 from '../page2/Nav2'
import Coms from '../page11/Coms'
import ClickSpark from '../animations/ClickSpark'

const Page11 = () => {
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
        <Coms/>
      </ClickSpark>
    
    </>
  )
}

export default Page11
