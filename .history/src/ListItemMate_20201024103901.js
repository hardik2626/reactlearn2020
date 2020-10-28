import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const ListItemMate = (props) => {
    const [line, setLine] = useState(false)
    const cutIt = () => {
        setLine(true)
    }
    return (
        <div className="todo_style_map">
            <span onClick={cutIt}><DeleteForeverIcon className="deleteIcon" /></span>
            <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
        </div>
        )
}

export default ListItemMate
