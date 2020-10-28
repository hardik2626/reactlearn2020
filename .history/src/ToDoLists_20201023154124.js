import React from 'react'

const ToDoLists = (props) => {
    return(
    <React.Fragment>
        <div className="todo_style">
            <i class="fa fa-times" aria-hidden="true">
            <li> {props.text} </li>
        </div>
    <React.Fragment>
    )

}
export default ToDoLists