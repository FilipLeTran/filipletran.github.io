import FlightIcon from '@mui/icons-material/Flight';
import { styled } from '@mui/system';
import SvgIcon from '@mui/material/SvgIcon';


const AirplaneContainer = styled('div')({
    position: 'relative',
    left: '0vw',
    top: '3vh',
    transform: 'rotate(180deg)'
});

export default function Airplane() {
    return (
        <AirplaneContainer>
            <SvgIcon component={FlightIcon} sx={{ 
                fontSize: '10vw',
                color: '#d3d3d3',
                }}>
            </SvgIcon>
        </AirplaneContainer>
    )
}

