import { styled } from '@mui/system';
import NavigationLink from './NavigationLink';

const links = [
    'Filip Tran',
    'About me',
    'Projects',
    'Experience'
];

const renderLinks = () => { 
    return links.map((link) => <NavigationLink linkName={link}></NavigationLink>)
}

export function Navbar() {
    return (
        <Bar>
            {renderLinks()}
        </Bar>
    )
}


const styles = {
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    width: '100vw',
    height: '3vw',
    backgroundColor: '#3d3d3d26',
};

const Bar = styled('div')(styles);