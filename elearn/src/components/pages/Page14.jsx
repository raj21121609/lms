import React from 'react'
import Chat_app from '../page14/Chat_app'
import Nav2 from '../page2/Nav2'
import ClickSpark from '../animations/ClickSpark'

const Page14 = () => {
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
        <Chat_app/>
      </ClickSpark>
    
    </>
  )
}

export default Page14
