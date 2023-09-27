import { styled } from '@mui/system';

const Text = styled('div')({
    position: 'relative',
    left: '5vw',
    top: '.5vw',
    color: 'white'
});


export default function LandingText(props: {content: string}){
    
    const { content } = props;

    return (
        <Text>{content}</Text>
    )
}
