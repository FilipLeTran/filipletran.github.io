import React, { Component } from 'react';
import Airplane from './Airplane';
import { styled } from '@mui/system';
import RenderLandingPoints from './RenderLandingPoints';


const Path = styled('div')({
    position: 'absolute',
    top: 0,
    left: '5.1%',
    backgroundColor: '#d3d3d3',
    height: '100vh',
    width: 2
});

export default function Timeline() {
    return (
        <div>
            <Airplane></Airplane>
            <Path></Path>
            <RenderLandingPoints/>
        </div>
    )
}
