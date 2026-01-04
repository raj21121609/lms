import React from 'react'
import Nav2 from '../page2/Nav2'
import Checkout from '../page5/Checkout'
import ClickSpark from '../animations/ClickSpark'

const Page5 = () => {
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
        <Checkout/>
      </ClickSpark>
    
    </>
  )
}

export default Page5
