import React, { Component } from 'react'

const  SlotM = () => {
    let x = 'A';
    let y = 'A';
    let z = 'A';

    if( (x===y) && (y===z) ){
        return(
            <>
                <div className="slot">
                    <h1>{x} {y} {z}</h1>
                    <h2>This is Matching</h2>
                    <hr/>
                    
                </div>
            </>
        )
    }
}

const MachineGame = () =>{
    return(
        <>
            <h1 className="heading_style"> Welcome to <span style={{fontWeight:'bold'}}>Slot Machine</span>  </h1>
        </>
    )
}

export default MachineGame