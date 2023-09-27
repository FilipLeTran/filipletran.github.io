import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timeline from './components/navbar/Timeline';
import Content from './components/content/Content';

function App() {

  return (
    <>
        <Timeline></Timeline>
        <Content></Content>
    </>
  )
}

export default App
