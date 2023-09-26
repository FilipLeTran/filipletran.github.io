import FlightIcon from '@mui/icons-material/Flight';
import { styled } from '@mui/system';
import SvgIcon from '@mui/material/SvgIcon';


const AirplaneContainer = styled('div')({
    transform: 'rotate(180deg)'
});


export default function Airplane() {
    return (
        <AirplaneContainer>
            <SvgIcon component={FlightIcon} sx={{ fontSize: '10vw'}}></SvgIcon>
        </AirplaneContainer>
    )
}

