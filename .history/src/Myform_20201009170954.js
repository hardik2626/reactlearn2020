import React from 'react'

const Myform = () => {
        const subForm = (event) =>{
                console.log(event.target.value);
        }
        return(
                <>
                <div>
                        <h1>Hello </h1>
                        <input type="text" placeholder="Enter Your Name" onChange={subForm} />
                        <button>Click Me</button>
                </div>
        </>
        )
}

export default Myform;