import React, { useState } from 'react'

const Myform = () => {

        const [name, setName] = useState("")
        const [fullname, setFullName] = useState()

        const subForm = (event) =>{
                //setName(event.target.value)
                console.log(event.target.value);
        }
        const onSubmit = () =>{
                setFullName(name)
        }
        return(
                <>
                <div>
                        <h1>Hello {fullName}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={subForm} value={name} />
                        <button onClick={onSubmit}>Click Me</button>
                </div>
        </>
        )
}

export default Myform;