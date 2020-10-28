import React, { useState } from 'react'

const Myform = () => {

        const [name, setName] = useState('')
        const [lastname, setLastName] = useState('')
        const [fullName, setFullName] = useState('')
        const [lastname2, setLastName2] = useState('')
        const [myemail, setMyEmail] = useState('')
        const [myemail2, setMyEmail2] = useState('')

        const subForm = (event) =>{
                setName(event.target.value)
                //console.log(event.target.value);
        }

        const subFormlname = (event) => {
                setLastName(event.target.value)
        }

        const subMyEmail = (event) => {
                setMyEmail(event.target.value)
        }
        const onSubmit = (event) => {
                event.preventDefault();
                setFullName(name)
                setLastName2(lastname)
                setMyEmail(myemail)
        }
        return(
                <>
                <div className="main_div">
                <form onSubmit={onSubmit}>
                        <h1>Hellooo {fullName} {lastname2} {myemail2}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={subForm} value={name} />
                        <br/>
                        <input type="text" placeholder="Enter Your Last Name" onChange={subFormlname} value={lastname} />
                        <input type="email" placeholder="Enter Email" onChange={subMyEmail} value={myemail}/>
                        <button type="submit">Click Me</button>
                        </form>
                </div>
        </>
        )
}

export default Myform;