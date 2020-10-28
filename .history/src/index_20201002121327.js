import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Newlist from './Newlist';
import Para from './Para';

ReactDOM.render(
  <>
    <Heading />
    <Para />
    <Newlist/>
  </>,
  document.getElementById('root')
);