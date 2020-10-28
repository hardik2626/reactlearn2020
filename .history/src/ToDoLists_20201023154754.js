import React from 'react'

const ToDoLists = (props) => {
    return(
    <>
        <div className="todo_style">
            <i class="fa fa-times" aria-hidden="true" />x
            <li> {props.text} </li>
        </div>
    </>
    )

}
export default ToDoLists