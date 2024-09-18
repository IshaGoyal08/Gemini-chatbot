'use client'
import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'


const page = () => {
  return (
    <div className='flex min-h-[100vh]'>
      <Sidebar/>
     <Main/>
    </div>
  )
}

export default page