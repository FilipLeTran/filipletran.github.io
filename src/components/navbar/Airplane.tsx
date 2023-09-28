import FlightIcon from '@mui/icons-material/Flight';
import { styled } from '@mui/system';
import SvgIcon from '@mui/material/SvgIcon';


const AirplaneContainer = styled('div')({
    position: 'inherit',
    // right: '-7.5vw',
    // top: '7vh',
});

export default function Airplane() {
    return (
        <AirplaneContainer>
            <SvgIcon component={FlightIcon} sx={{ 
                position: 'absolute',
                color: '#d3d3d3',
                transform: 'rotate(180deg)'
                }}>
            </SvgIcon>
        </AirplaneContainer>
    )
}

