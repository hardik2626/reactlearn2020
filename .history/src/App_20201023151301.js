import React from 'react';
import { useState } from 'react';
import add, { sub, mult, div } from './Calc';
import DigitalClock from './DigitalClock';
import Eventhand from './Eventhand';
import MachineGame from './MachineGame';
import Myform from './Myform';
import Myhooks from './Myhooks';
import Timegame from './Timegame';

function App(props){
  const [inputList, setinputList] = useState('')
  const [Items, setItems] = useState([])

  const itemEvents = (event) =>{
    setinputList(event.target.value)
  }

  const listOfItems = () => {

  }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDO List</h1>
        <br/>
        <input type="text" name="" placeholder="add a item" onChange={itemEvents} />
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li>{inputList}</li> */}
          Items.map( (itemval) => {
            return <li>{inputList}</li>
          })
        </ol>


      </div>
    </div>
   
  </>
  )
}

export default App