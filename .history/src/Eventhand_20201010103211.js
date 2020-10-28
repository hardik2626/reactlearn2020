import React, { Component, useState } from 'react'

const Eventhand = () => {
        const bgChange = () => {
                console.log('clickkk');
                const purple = "#8e445s";
                const [bg,setBg] = useState(purple)
        }
        return(
                <>
                        <div className="evnt" style={{backgroundColor={}}}>
                                <button onClick={bgChange}>Click Me EventHandle</button>
                        </div>
                </>
        )
}
export default Eventhand;