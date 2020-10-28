import React, { useState } from 'react'

const Myform = () => {

        const[fullname, setFullName] = useState({
                fname: '',
                lname: '',
                email: ''
        })

        const onSubmit = (event) => {
                event.preventDefault();
                alert('Form Submit')
        }

        const inputEvent = (event) => {
                console.log(event.target.value)
                console.log(event.target.name)

                const value = event.target.value
                const name = event.target.name
                const email = event.target.email

                setFullName( (preValue) => {
                        if(name === 'fname'){
                                return{
                                        fname: value,
                                lname: preValue.lname,
                                email: preValue.email
                                }  
                        } else if(name === 'lfname'){
                                return{
                                fname: preValue.fname,
                                lname: value
                                }
                        } else if(name === 'email'){
                                return{
                                fname: preValue.fname,
                                email: value
                                }
                        }
                })
        }


        return(
                <>
                <div className="main_div">
                <form onSubmit={onSubmit}>
                        <h1>Hellooo {fullname.fname}</h1>
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