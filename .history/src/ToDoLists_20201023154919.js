import React from 'react'

const ToDoLists = (props) => {

    const deleteItems = () => {
        console.log('dddddd')
    }
    return(
    <>
        <div className="todo_style">
            <i class="fa fa-times" aria-hidden="true"
                onClick={deleteItems} />
            <li> {props.text} </li>
        </div>
    </>
    )

}
export default ToDoLists