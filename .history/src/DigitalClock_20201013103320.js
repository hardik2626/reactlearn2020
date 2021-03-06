import React, { useState } from 'react'

const DigitalClock = () => {
    let ltTime = new Date().toLocaleTimeString()
    const[ctime, SetCtime] = useState(ltTime)
    
    const UpdateTime = () => {
        let ltTime = new Date().toLocaleTimeString()
        SetCtime(ltTime)
    }
    
    setInterval(UpdateTime, 1000);
    return(
        <div>
            <h1>Time = {ltTime}</h1>
            <button onClick={UpdateTime}></button>
        </div>
    )
}

export default DigitalClock
