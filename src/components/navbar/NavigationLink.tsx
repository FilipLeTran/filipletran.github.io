import { styled } from '@mui/system';
import LandingText from './LandingText';


// const Button = styled('button')({
//     position: 'relative',
//     top: 0,
//     height: '10vw',
//     marginBlock: 0
// });

export default function NavigationLink(props: { linkName: string; }) {

    const { linkName } = props;

    return (
        <button className='reset-button'>
            <LandingText content={linkName}/>
        </button>
    );
}
