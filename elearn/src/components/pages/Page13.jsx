import React from 'react'
import Chat from '../page13/Chat'
import Nav2 from '../page2/Nav2'
import ClickSpark from '../animations/ClickSpark'

const Page13 = () => {
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
        <Chat/>
      </ClickSpark>
    
    </>
  )
}

export default Page13
