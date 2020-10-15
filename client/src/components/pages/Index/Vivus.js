import React from 'react';
import ReactVivus from 'react-vivus';

import animatedFootprint from './img/footprint_animated.svg'


const MyComponent = () => (
  <ReactVivus
    id="foo"
    option={{
      file: animatedFootprint,
      type: 'delayed',
      animTimingFunction: 'EASE',
      duration: 160,
    }}
    style={{ height: '600px', width: '100%' }}
    callback={console.log}
  />
);
export default MyComponent;