import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem()
    }
    return (
        <div>
            <div className="note">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <Button  color="primary">
                    <DeleteForeverIcon className="deleteIcon" onClick={deleteNote} />
                </Button>
            </div>
        </div>
    )
}

export default Note
