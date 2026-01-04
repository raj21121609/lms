import React from 'react'
import Nav2 from '../../components/page2/Nav2'
import Shop from '../../components/page4/Shop'
import ClickSpark from '../animations/ClickSpark'

const Page4 = () => {
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
        <Shop/>
      </ClickSpark>
    </>
  )
}

export default Page4
