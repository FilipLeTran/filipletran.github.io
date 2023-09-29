import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const Text = styled(Typography)({
    position: 'relative',
    top: '.5vw',
    width: '10vw',
    color: 'white',
});

const ResponsiveFont = {
    xs: '0.5rem',
    sm: '.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem'
};


export default function LandingText(props: {content: string}){
    
    const { content } = props;

    return (
        <Text fontSize={ResponsiveFont}>{content}</Text>
    )
}
