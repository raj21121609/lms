import React from 'react'
import Nav2 from '../page2/Nav2'
import Others from '../page2/Others'
import ClickSpark from '../animations/ClickSpark'

const Page2 = () => {
  return (
    <ClickSpark
        sparkColor="#4A90E2"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Nav2/>
        <Others/>
      </ClickSpark>

  )
}

export default Page2
