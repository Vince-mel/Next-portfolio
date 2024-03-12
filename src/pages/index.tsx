import React from 'react'
import '@/sections/Navbar'
import Navbar from '@/sections/Navbar'
import SocialIcons from '@/components/SocialIcons'


function Index() {
  return   (
    <div className="app">
      <Navbar />
      <SocialIcons />
    </div>
  ) 
}

export default Index