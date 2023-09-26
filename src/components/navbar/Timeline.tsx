import React, { Component } from 'react';
import Airplane from './Airplane';
import { styled } from '@mui/system';

const Path = styled('div')({
    position: 'absolute',
    top: 0,
    left: '5vw',
    backgroundColor: 'white',
    height: '100vh',
    width: 2
});

export default class Timeline extends Component {
  render() {
    return (
        <div>
            <Airplane></Airplane>
            <Path></Path>
        </div>
    )
  }
}
