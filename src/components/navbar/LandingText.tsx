import { styled } from '@mui/system';

interface LandingText {
    content: string;
}

const Text = styled('div')({
    position: 'relative',
    left: '5vw',
    top: '.5vw',
    color: 'white'
});


export default function LandingText(props: LandingText){
    
    const { content } = props;

    return (
        <Text>{content}</Text>
    )
}
