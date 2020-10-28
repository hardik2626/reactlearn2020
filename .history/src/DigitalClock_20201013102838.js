import React, { useState } from 'react'

const DigitalClock = () => {
    let ltTime = new Date().toLocaleTimeString()
    return(
        <div>
            <h1>Time = {ltTime}</h1>
        </div>
    )
}

export default DigitalClock
