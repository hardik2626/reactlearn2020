import React, { useState } from 'react'

const Myform = () => {

        const [name, StName] = useState()

        const subForm = (event) =>{
                console.log(event.target.value);
        }
        return(
                <>
                <div>
                        <h1>Hello {name}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={subForm} />
                        <button>Click Me</button>
                </div>
        </>
        )
}

export default Myform;