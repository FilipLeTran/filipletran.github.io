import React from 'react'
import LandingPoint from './LandingPoint';
import { styled } from '@mui/system';
import Airplane from './Airplane';

const links: Array<string> = [
    'Home',
    'About me',
    'Projects',
    'Experience'
];

const linksItems = links.map( link =>
    <>
        <LandingPoint linkName={link}/>
    </> 
);

const RenderedLandingPoints = styled('div')({
    position: 'relative',
    top: 0,
    left: '5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100vh'
})


export default function RenderLandingPoints() {
  return (
    <RenderedLandingPoints>
        { linksItems }
    </RenderedLandingPoints>
  )
}
