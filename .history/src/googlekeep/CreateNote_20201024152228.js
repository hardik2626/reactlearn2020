import React from 'react'
import Button from '@material-ui/core/Button';
const CreateNote = () => {
    


    return (
        <div>
            <div className="main_note">
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Write a note..." cols="30" rows="10"></textarea>

                </form>
            </div>
        </div>
    )
}

export default CreateNote
