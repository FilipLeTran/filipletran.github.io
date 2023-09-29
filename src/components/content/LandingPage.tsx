import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StartPage = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    height: '100vh',
});

export default function LandingPage() {
  return (
    <StartPage>
        <Typography variant="h2">Welcome to my portfolio page!</Typography>
        <Typography variant="h4">M.Sc in Engineering Graduate</Typography>
        <Typography variant="h5">Information and Communication Technologies</Typography>
    </StartPage>
  )
}
