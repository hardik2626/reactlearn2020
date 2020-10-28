import React, { useState } from 'react'

const Myform = () => {

        const [fullname, setFullName] = useState(() => {
                fname: '',
                lname: '',
                email: ''
        })

        const onSubmit = (event) => {
                event.preventDefault();
                alert('Form Submit')
        }

        const inputEvent = (event) => {
                setName(event.target.value)
        }


        return(
                <>
                <div className="main_div">
                <form onSubmit={onSubmit}>
                        <h1>Hellooo </h1>
                        <input type="text" placeholder="Enter Your Name" name="fname" onChange={inputEvent} value={fullname.fname} />
                        <br/>
                        <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={fullname.lname} />
                        <input type="email" placeholder="Enter Email" name="email" onChange={inputEvent} value={fullname.email}/>
                        <button type="submit">Click Me</button>
                        </form>
                </div>
        </>
        )
}

export default Myform;