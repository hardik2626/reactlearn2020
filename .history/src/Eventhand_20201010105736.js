import React, { Component, useState } from 'react'

const Eventhand = () => {
        const purple = "#000";
        const [bg,setBg] = useState(purple)
        const [ename, setName] = useState('Click Me Event')
        //const [bgBack, setNewName] = useState(setName)
        const bgChange = () => {
                //console.log('clickkk');
                let newBg = "#789548"
                setBg(newBg)
                setName("Hardik Devani 🤬 ") 
        }
        const bgBack = () => {
                setBg(purple)
                setName('Double Click')
        }
        return(
                <>
                        <div className="evnt" style={{backgroundColor:bg}}>
                                <button onDoubleClick={bgChange} onDoubleClick={bgBack}>
                                {ename}
                                </button>
                        </div>
                </>
        )
}
export default Eventhand;