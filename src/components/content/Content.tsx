import LandingPage from './LandingPage';
import About from './About-Me/About';
import Project from './Project';
import Experience from './Experience';
import { styled } from '@mui/system';

const Page = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '1 1 auto'
});

export default function Content() {
  return (
    <Page>
        <LandingPage></LandingPage>
        <About></About>
        <Project></Project>
        <Experience></Experience>
    </Page>
  )
}
