import React, { useState } from 'react'

const liveTime = () => {
    let ltTime = new Date().toLocaleTimeString()
    return(
        <div>
            <h1>Time = {ltTime}</h1>
        </div>
    )
}

export default DigitalClock
