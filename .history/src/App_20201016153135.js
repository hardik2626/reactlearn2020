import React from 'react';
import add, { sub, mult, div } from './Calc';
import DigitalClock from './DigitalClock';
import Eventhand from './Eventhand';
import MachineGame from './MachineGame';
import Myform from './Myform';
import Myhooks from './Myhooks';
import SplitPane from './SplitPane';
import Timegame from './Timegame';

function App(props){
  
  return(
    <>
    <SplitPane />
    <DigitalClock />
    <Timegame />
    <MachineGame />
    <Eventhand />
   <Myform />
   <Myhooks />
  <ul>
  <li>Hello {props.myname}</li> 
  <li>now time is {new Date().toLocaleDateString}</li>
    <li>Sum of Two No is {add(45,40)}</li>
    <li>Sub of Two No is {sub(30,40)}</li>
    <li>Div of Two No is {div(22,40)}</li>
    <li>Multi of Two No is {mult(45,40)}</li>
  </ul>
  </>
  )
}

export default App