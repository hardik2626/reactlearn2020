import React, { useState } from 'react'

const Myform = () => {

        const [name, setName] = useState('')


        const inputEvent = (event) => {
                setName(event.target.value)
        }


        const onSubmit = (event) => {
                event.preventDefault();

        }
        return(
                <>
                <div className="main_div">
                <form onSubmit={onSubmit}>
                        <h1>Hellooo {fullName} {lastname2} {myemail2}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name} />
                        <br/>
                        <input type="text" placeholder="Enter Your Last Name" onChange={inputEvent} value={lastname} />
                        <input type="email" placeholder="Enter Email" onChange={inputEvent} value={myemail}/>
                        <button type="submit">Click Me</button>
                        </form>
                </div>
        </>
        )
}

export default Myform;