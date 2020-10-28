import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

const ToDoLists = (props) => {

    
    return(
    <>
        <div className="todo_style">
            <i className="fa fa-times" aria-hidden="true" onClick={() => {props.onSelect(props.id)}} />
            <CloseIcon className="fa fa-times" onClick={() => {props.onSelect(props.id)}} />
            <li> {props.text} </li>
        </div>
    </>
    )

}
export default ToDoLists