import { styled } from '@mui/system';
import LandingText from './LandingText';


const Point = styled('button')({
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '10000px',
    width: '3vw',
    height: '3vw'
});

export default function LandingPoint(props: { linkName: string; }) {

    const { linkName } = props;

    return (
        <Point className='reset-button'>
            <LandingText content={linkName}/>
        </Point>
    );
}
