import React, { useState } from 'react'

const Myform = () => {

        const [name, setName] = useState()
        const [lastnsme, setLastName] = useState()
        const [fullName, setFullName] = useState()

        const subForm = (event) =>{
                setName(event.target.value)
                //console.log(event.target.value);
        }

        const subF
        const onSubmit = (event) => {
                event.preventDefault();
                setFullName(name)
        }
        return(
                <>
                <div className="main_div" onSubmit={onSubmit}>
                <form>
                        <h1>Hello {fullName}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={subForm} value={name} />
                        <br/>
                        <input type="text" placeholder="Enter Your Last Name" onChange={subFormlname} value={lastname} />
                        <button type="submit">Click Me</button>
                        </form>
                </div>
        </>
        )
}

export default Myform;