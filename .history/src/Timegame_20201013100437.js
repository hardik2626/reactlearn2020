import React, { useEffect, useState } from 'react'

const [timeLeft, setTimeLeft] = useState();

useEffect( () => {
    const timer = setTimeout( () => {
        setTimeLeft()
    }, 1000)
})
    const Timegame = () => {
        let date = new Date().get
        return (
            <div>
                <h1>Time - {timeLeft}</h1>
                <button >Get Time</button>    
            </div>
        )
    }

    

export default Timegame
