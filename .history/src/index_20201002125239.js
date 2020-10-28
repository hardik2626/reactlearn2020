import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myname = 'Hardik Devani';
let greeting = '';
let cssStyle = { };





ReactDOM.render(
  <>
  <div>
    <h1>
      Hello {myname}, <span style={cssStyle}> {greeting} </span>
    </h1>
  </div>
  </>,
  document.getElementById('root')
);