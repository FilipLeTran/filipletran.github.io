import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timeline from './components/navbar/Timeline';
import Content from './components/content/Content';
import { styled } from '@mui/system';

const Test = styled('div')({
})

function App() {

  return (
    <>
        <Test>
            <Timeline></Timeline>
            <Content></Content>
        </Test>
    </>
  )
}

export default App
