import React from 'react';
import ReactVivus from 'react-vivus';

import animatedFootprint from './footprint_animated.svg'

const MyComponent = () => (
  <ReactVivus
    id="foo"
    option={{
      file: animatedFootprint,
      type: 'delayed',
      animTimingFunction: 'EASE',
      duration: 160,
      onReady: console.log
    }}
    style={{ height: '600px', width: '500px' }}
    callback={console.log}
  />
);
export default MyComponent;