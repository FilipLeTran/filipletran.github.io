import Airplane from './Airplane';
import { styled } from '@mui/system';
import RenderLandingPoints from './RenderLandingPoints';


const Navbar = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: '15vw',
    backgroundColor: '#3d3d3d26'
});

const Path = styled('div')({
    position: 'relative',
    top: 0,
    left: '25%',
    backgroundColor: '#d3d3d3',
    height: '100vh',
    width: 2
});

const ApplySticky = styled('div')({
    position: 'sticky',
    top: 0,
    height: '100vh'
});

const PushToTop = styled('div')({
    position: 'absolute',
    top: 0
});

export default function Timeline() {
    return (
        <Navbar>
            <ApplySticky>
                <Path></Path>
                <PushToTop><RenderLandingPoints/></PushToTop>
                {/* <PushToTop><Airplane/></PushToTop> */}
            </ApplySticky>
        </Navbar>
    )
}
