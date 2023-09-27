import React from 'react'
import LandingPoint from './LandingPoint';
import { styled } from '@mui/system';

const links: Array<string> = [
    'Home',
    'About me',
    'Projects',
    'Experience'
];

const linksItems = links.map( link => <LandingPoint linkName={link}/>)

const RenderedLandingPoints = styled('div')({
    position: 'absolute',
    top: 0,
    left: '3.65vw',
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
