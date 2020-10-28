import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const ToDoListMate = () => {
    const [item, setItem] = useState('')
    return (
        <div>
            <div className="main_div_mate">
                <div className="center_div_mate">
                    <br/>
                    <h1>ToDo List New</h1>
                    <br/>
                    <input type="text" name="" id="" placeholder="Add an Item" onChange={itemEvent} />
                    <Button className="newBtn">
                        <AddIcon />
                    </Button>
                    <br/>
                    <ol>
                        <li>{item}</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ToDoListMate
