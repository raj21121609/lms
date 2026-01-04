import React from 'react'
import Last from '../page6/Last'
import ClickSpark from '../animations/ClickSpark'

const Page6 = () => {
  return (
    <>
    
    <ClickSpark
        sparkColor="#4A90E2"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Last/>
      </ClickSpark>
    </>
  )
}

export default Page6
