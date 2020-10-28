import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
const Note = () => {
    return (
        <div>
            <div className="note">
                <h1>Title</h1>
                <br/>
                <p>Content</p>
                <Button color="secondary" className={classes.button} startIcon={<DeleteForeverIcon />} >
                    <DeleteForeverIcon className="deleteIcon" />
                </Button>
            </div>
        </div>
    )
}

export default Note
