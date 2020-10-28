import React from 'react';
import add, { sub, mult, div } from './Calc';

function App(props){
  
  return(
    <>
    <h1>Hello, {props.name}</h1>;
  <ul>
  <li>Hello {props.myname}</li> 
    <li>Sum of Two No is {add(45,40)}</li>
    <li>Sub of Two No is {sub(30,40)}</li>
    <li>Div of Two No is {div(22,40)}</li>
    <li>Multi of Two No is {mult(45,40)}</li>
  </ul>
  </>
  )
}

function Appsss() {
  return (
    <div>
      <App name="Sara" />
      <App name="Cahal" />
      <App name="Edite" />
    </div>
  );
}
export default App