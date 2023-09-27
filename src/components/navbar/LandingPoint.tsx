import { styled } from '@mui/system';
import React, { Component } from 'react'
import LandingText from './LandingText';


const Point = styled('button')({
    position: 'relative',
    // left: '3.7vw',
    backgroundColor: 'white',
    borderRadius: '3vw',
    width: '3vw',
    height: '3vw'
});

export default function LandingPoint(props: { linkName: string; }) {

    const { linkName } = props;

    return (
        <Point className=''>
            <LandingText content={linkName}/>
        </Point>
    );
}
