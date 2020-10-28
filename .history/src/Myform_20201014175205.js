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
                        <h1>Hellooo </h1>
                        <input type="text" placeholder="Enter Your Name" name="fname" onChange={inputEvent} value={fname} />
                        <br/>
                        <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={lname} />
                        <input type="email" placeholder="Enter Email" name="email" onChange={inputEvent} value={email}/>
                        <button type="submit">Click Me</button>
                        </form>
                </div>
        </>
        )
}

export default Myform;