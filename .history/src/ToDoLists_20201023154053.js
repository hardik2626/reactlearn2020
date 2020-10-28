import React from 'react'

const ToDoLists = (props) => {
    return(
    <React.Fragment>
        <div className="todo_style">
            <li> {props.text} </li>
        </div>
    <React.Fragment>
    )

}
export default ToDoLists