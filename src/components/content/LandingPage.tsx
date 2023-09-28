import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StartPage = styled('div')({
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
});

export default function LandingPage() {
  return (
    <StartPage>
        <Typography variant="h2">Welcome to my portfolio page!</Typography>
    </StartPage>
  )
}
