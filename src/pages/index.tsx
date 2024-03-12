import React from 'react'
import '@/sections/Navbar'
import Navbar from '@/sections/Navbar'
import SocialIcons from '@/components/SocialIcons'
import Email from '@/components/Email'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Project from '@/sections/Project'


function Index() {
  return   (
    <div className="app">
      <Navbar />
      <SocialIcons />
      <main>
      <Hero />
      <About />
      <Project />
      </main>
      <Email />
    </div>
  ) 
}

export default Index