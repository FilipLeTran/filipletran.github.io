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
    display: 'flex',
    flexDirection: 'column'
})


export default function RenderLandingPoints() {
  return (
    <RenderedLandingPoints>
        { linksItems }
    </RenderedLandingPoints>
  )
}
