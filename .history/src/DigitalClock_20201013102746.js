import React, { useState } from 'react'

const Livetime = () => {
    let lttime = new Date().toLocaleTimeString()
    return(
        <div>
            <h1>Time = {lttime}</h1>
        </div>
    )
}

export default DigitalClock
