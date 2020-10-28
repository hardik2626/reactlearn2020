import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {
    const[expand, setExpand] = useState(false)
    
    const [note, setNote] = useState({
        title:'',
        content:'',
    })

    const InputEvent = (event) => {

        // const value = event.target.value
        // const name = event.target.name

        const {name, value} = event.target

        //setNote(event.target.value)
        setNote( (prevData) => {
            return{
                ...prevData,
                [name] : value,
                

            }
        })
        console.log(note)
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title:'',
            content:'',
        })
    }

    const expandIt = () => {
        setExpand(true)
    }

    const backtoNormal = () => {
        setExpand(true)
    }

    return (
        <div>
            <div className="main_note" onDoubleClick={backtoNormal}>
                <form>
                    {expand ? <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" /> : null}
                    <textarea name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..." cols="" rows="" onClick={expandIt}></textarea>
                    {expand ? <Button onClick={addEvent}>
                        <AddIcon className="plu_sign" />
                    </Button> : null}
                </form>
            </div>
        </div>
    )
}

export default CreateNote
