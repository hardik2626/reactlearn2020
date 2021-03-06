import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ListItemMate = (props) => {
    return (<div className="todo_style_map">
        <span><DeleteForeverIcon className="deleteIcon" /></span>
    <li>{props.text}</li>
    </div>)
}

export default ListItemMate
