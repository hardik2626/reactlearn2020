import React from 'react'
import { useState } from 'react'



    const Timegame = () => {
        let newTime = new Date().toLocaleTimeString()

        const[curTime, setCurTime] = useState(newTime)

        const UpdateTime = () => {
            newTime = new Date().toLocaleTimeString()
            setCurTime(newTime);
        }
        return (
            <div>
                <h1>Time - {curTime}</h1>
                <button onClick={UpdateTime}>Get Time</button>    
            </div>
        )
    }

    

export default Timegame
