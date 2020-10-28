import React from 'react'

const Livetime = () => {
    let lttime = new Date().toLocaleDateString()
    return(
        <div>
            <h1>Time = {lttime}</h1>
        </div>
    )
}

export default DigitalClock
