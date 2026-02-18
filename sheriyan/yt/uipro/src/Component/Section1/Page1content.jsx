
import React from 'react'
import Rightcontent from './Rightcontent/Rightcontent'
import Leftcontent from './Leftcontent/Leftcontent'

const Page1content = () => {
  return (
    <div className='py-8 h-[80vh] px-18  flex gap-10'>
      <Leftcontent />
      <Rightcontent />
    
    </div>
  )
}

export default Page1content
