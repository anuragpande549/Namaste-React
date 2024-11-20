import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

function MainContains() {
  return (
    <div className='h-[92vh] box-border box-content overflow-hidden' >
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContains
