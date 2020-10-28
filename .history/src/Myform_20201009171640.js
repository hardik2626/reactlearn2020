import React, { useState } from 'react'

const Myform = () => {

        const [name, setName] = useState()

        const subForm = (event) =>{
                //setName(event.target.value)
                console.log(event.target.value);
        }
        return(
                <>
                <div>
                        <h1>Hello {fullName}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={subForm} value={name} />
                        <button>Click Me</button>
                </div>
        </>
        )
}

export default Myform;