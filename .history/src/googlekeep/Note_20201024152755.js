import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const Note = () => {
    return (
        <div>
            <div className="note">
                <h1>Title</h1>
                <br/>
                <p>Content</p>
                <DeleteForeverIcon className="deleteIcon" />
            </div>
        </div>
    )
}

export default Note
