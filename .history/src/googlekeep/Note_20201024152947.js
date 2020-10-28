import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const Note = () => {
    return (
        <div>
            <div className="note">
                <h1>Title</h1>
                <br/>
                <p>Content</p>
                <button className="btn">
                    <DeleteForeverIcon className="deleteIcon" />
                </button>
            </div>
        </div>
    )
}

export default Note
