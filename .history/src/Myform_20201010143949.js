import React, { useState } from 'react'

const Myform = () => {

        const [name, setName] = useState('')
        const [lastname, setLastName] = useState('')
        const [fullName, setFullName] = useState('')
        const [lastname2, setLastName2] = useState('')

        const subForm = (event) =>{
                setName(event.target.value)
                //console.log(event.target.value);
        }

        const subFormlname = (event) => {
                setLastName(event.target.value)
        }
        const onSubmit = (event) => {
                event.preventDefault('');
                setFullName(name)
                setLastName2(lastname)
        }
        return(
                <>
                <div className="main_div">
                <form onSubmit={onSubmit}>
                        <h1>Hellooo {fullName} {lastname2}</h1>
                        <input type="email" placeholder="Enter Your Name" onChange={subForm} value={name} />
                        <br/>
                        <input type="password" placeholder="Enter Your Last Name" onChange={subFormlname} value={lastname} />
                        <button type="submit">Click Me</button>
                        </form>
                </div>
        </>
        )
}

export default Myform;