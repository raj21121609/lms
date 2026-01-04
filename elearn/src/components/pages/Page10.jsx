import React from 'react'
import Nav2 from '../page2/Nav2'
import TutCourse from '../page10/TutCourse'
import ClickSpark from '../animations/ClickSpark'

const Page10 = () => {
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
        <TutCourse/>
      </ClickSpark>
    
    </>
  )
}

export default Page10
