import React, { Component, useState } from 'react'

const Eventhand = () => {
        const purple = "#000";
        const [bg,setBg] = useState(purple)
        const [ename, setName] = useState('Click Me Event')
        const bgChange = () => {
                console.log('clickkk');
                let newBg = "#789548"
                setBg(newBg)
                setName("Hardik Devani :blush")
        }
        return(
                <>
                        <div className="evnt" style={{backgroundColor:bg}}>
                                <button onClick={bgChange}>{ename}</button>
                        </div>
                </>
        )
}
export default Eventhand;