import React, { Component } from 'react'

const  SlotM = (props) => {
    // let x = 'A';
    // let y = 'A';
    // let z = 'A';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x, y, z} = props

    if( x===y && y===z ){
        return(
            <>
                <div className="slot">
                    <h1>{x} {y} {z}</h1>
                    <h2>This is Matching</h2>
                    <hr/>

                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="slot">
                    <h1>{x} {y} {z}</h1>
                    <h2>This is not Matching</h2>
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
            <div className="slotmachine">
            <SlotM  x='X' y='Z' z='Z' />
            <SlotM x='S' y='S' z='S:'/>
            <SlotM x='S' y='S' z='M'/>
            <SlotM x='M' y='M' z='M'/>
            </div>
        </>
    )
}

export default MachineGame