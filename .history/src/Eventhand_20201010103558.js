import React, { Component, useState } from 'react'

const Eventhand = () => {
        const purple = "#000";
        const [bg,setBg] = useState(purple)
        const bgChange = () => {
                console.log('clickkk');
        }
        return(
                <>
                        <div className="evnt" style={{backgroundColor:bg}}>
                                <button onClick={bgChange}>Click Me EventHandle</button>
                        </div>
                </>
        )
}
export default Eventhand;