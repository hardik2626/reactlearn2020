import React, { useState } from 'react'

const Myform = () => {

        const [name, setName] = useState()
        const [fullName, setFullName] = useState()

        const subForm = (event) =>{
                setName(event.target.value)
                //console.log(event.target.value);
        }
        const onSubmit = () => {
                setFullName(name)
        }
        return(
                <>
                <div className="main_div" onSubmit="">
                <form>
                        <h1>Hello {fullName}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={subForm} value={name} />
                        <button onClick={onSubmit} type="submit">Click Me :thumb</button>
                        </form>
                </div>
        </>
        )
}

export default Myform;