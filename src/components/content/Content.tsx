import React from 'react'
import LandingPage from './LandingPage'
import About from './About-Me/About'
import Project from './Project'
import Experience from './Experience'

export default function Content() {
  return (
    <div>
        <LandingPage></LandingPage>
        <About></About>
        <Project></Project>
        <Experience></Experience>
    </div>
  )
}
