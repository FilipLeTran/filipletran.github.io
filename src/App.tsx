import './App.css'
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import { styled } from '@mui/system';

const Test = styled('div')({
    display: 'flex',
})

function App() {

  return (
    <>
        <Test>
            <Navbar></Navbar>
            <Content></Content>
        </Test>
    </>
  )
}

export default App
