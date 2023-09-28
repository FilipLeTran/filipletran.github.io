import { styled } from '@mui/system';
import LandingText from './LandingText';
import Airplane from './Airplane';


const Point = styled('button')({
    position: 'relative',
    top: 0,
    backgroundColor: 'white',
    textAlign: 'left'
});

export default function LandingPoint(props: { linkName: string; }) {

    const { linkName } = props;

    return (
        <Point className='reset-button'>
            {/* <Airplane/> */}
            <LandingText content={linkName}/>
        </Point>
    );
}
