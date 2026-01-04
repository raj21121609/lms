import React from 'react'
import ProfileOne from '../page9/ProfileOne'
import ClickSpark from '../animations/ClickSpark'

const Page9 = () => {
  return (
    <>
    <ClickSpark
        sparkColor="#4A90E2"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <ProfileOne/>
      </ClickSpark>
    </>
  )
}

export default Page9
