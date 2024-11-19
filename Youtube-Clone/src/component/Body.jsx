import React from 'react'
import Sidebar from './Sidebar'
import MainContains from './MainContains'

function Body() {
  return (
    <div className='flex absolute overflow-hidden w-[100vw]'>
      <Sidebar/>
      <MainContains/>
    </div>
  )
}

export default Body
