import React, { Component, useState } from 'react'

const Eventhand = () => {
        const bgChange = () => {
                const [bg,setBg] = useState(purple)
                console.log('clickkk');
                const purple = "#8e445s";
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