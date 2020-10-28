import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
const Note = () => {
    return (
        <div>
            <div className="note">
                <h1>Title</h1>
                <br/>
                <p>Content</p>
                <Button color="secondary"
        className={classes.button}
        startIcon={<DeleteForeverIcon />>
                    <DeleteForeverIcon className="deleteIcon" />
                </Button>
            </div>
        </div>
    )
}

export default Note
