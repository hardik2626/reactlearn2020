import React from 'react'
import { useState } from 'react'



    const Timegame = () => {
        let newTime = new Date().toLocaleTimeString()

        const[curTime, setCurTime] = useState(newTime)
        return (
            <div>
                <h1>Time - {curTime}</h1>
                <button >Get Time</button>    
            </div>
        )
    }

    

export default Timegame
