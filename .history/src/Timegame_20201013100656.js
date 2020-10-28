import React from 'react'



    const Timegame = () => {
        let newTime = new Date().toLocaleTimeString()
        return (
            <div>
                <h1>Time - {newTime}</h1>
                <button >Get Time</button>    
            </div>
        )
    }

    

export default Timegame
