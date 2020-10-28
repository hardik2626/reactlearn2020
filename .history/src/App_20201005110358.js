import React from 'react';
import add, { sub, mult, div } from './Calc';

function App(props){
  const element = <App hdname = 'aureate' />
  return(
    <>
  <ul>
  <li>Hello {props.myname}</li>
  <li>Hello {hdname}</li>
  
    <li>Sum of Two No is {add(45,40)}</li>
    <li>Sub of Two No is {sub(30,40)}</li>
    <li>Div of Two No is {div(22,40)}</li>
    <li>Multi of Two No is {mult(45,40)}</li>
  </ul>
  </>
  )
}
export default App