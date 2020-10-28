import React from 'react';
import add, { sub, mult, div } from './Calc';

function App(){
  return(
    <>
  <ul>
    <li>Sum of Two No is {add(45,40)}</li>
    <li>Sub of Two No is {sub(30,40)}</li>
    <li>Div of Two No is {div(45,40)}</li>
    <li>Multi of Two No is {mult(45,40)}</li>
  </ul>
  </>
  )
}
export default App