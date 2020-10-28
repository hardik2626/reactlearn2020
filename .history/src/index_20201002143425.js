import React from 'react';
import ReactDOM from 'react-dom';
import add from './Calc';

ReactDOM.render(
  <>
  <ul>
    <li>Sum of Two No is {add(45,40)}</li>
    <li>Sub of Two No is {sub(45,40)}</li>
    <li>Div of Two No is {div(45,40)}</li>
    <li>Multi of Two No is {mult(45,40)}</li>
  </ul>
  </>,
  document.getElementById('root')
);