import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = () => {
    
    const [note, setNote] = useState({
        title:'',
        content:'',
    })

    const InputEvent = (event) => {
        const value = event.target.value
        //setNote(event.target.value)
        setNote( (prevData) => {
            return{
                ...prevData, 
            }
        })
    }

    return (
        <div>
            <div className="main_note">
                <form>
                    <input type="text" value={note.title} onChange={InputEvent} placeholder="Title" />
                    <textarea value={note.content} onChange={InputEvent} placeholder="Write a note..." cols="30" rows="10"></textarea>
                    <Button>
                        <AddIcon className="plu_sign" />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateNote
