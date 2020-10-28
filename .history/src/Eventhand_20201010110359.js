import React, { Component, useState } from 'react'

const Eventhand = () => {
        const purple = "#125758";
        const [bg,setBg] = useState(purple)
        const [ename, setName] = useState('Click Me Event')
        const bgChange = () => {
                //console.log('clickkk');
                let newBg = "#789548"
                setBg(newBg)
                setName("Hardik Devani 🤬 ") 
        }
        const bgBack = () => {
                setBg("#98ERg4")
                setName('Double Click 😠')
        }
        return(
                <>
                        <div className="evnt" style={{backgroundColor:bg}}>
                                <button onClick={bgChange} onDoubleClick={bgBack}>
                                {ename}
                                </button>
                        </div>
                </>
        )
}
export default Eventhand;