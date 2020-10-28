import React from 'react';
import { useState } from 'react';
import add, { sub, mult, div } from './Calc';
import DigitalClock from './DigitalClock';
import Eventhand from './Eventhand';
import MachineGame from './MachineGame';
import Myform from './Myform';
import Myhooks from './Myhooks';
import Timegame from './Timegame';
import ToDoLists from './ToDoLists';

function App(props){
  const [inputList, setinputList] = useState('')
  const [Items, setItems] = useState([])

  const itemEvents = (event) =>{
    setinputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setinputList('');
  }

  const deleteItems = (id) => {
    console.log('dddddd')

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id
      })
    })

}
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDO List</h1>
        <br/>
        <input type="text" placeholder="add a item" onChange={itemEvents} value={inputList} />
        <button onClick={listOfItems}> + </button>

        <ol>
          {Items.map((itemval, index) => {
          return  <ToDoLists key={index} id={index} text={itemval} onSelect={deleteItems} />
          })}
        
        </ol>


      </div>
    </div>
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