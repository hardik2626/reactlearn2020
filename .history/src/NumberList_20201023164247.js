import React, { Component } from 'react'
import { useState } from 'react'

const NumberList = () => {
    const[num, setNum] = useState(0)

    const incNum = () =>{
        setNum = setNum + 1
    }

    const decNum = () =>{
        
    }
    return(
        <>
            <div className="main_div_num">
                <div className="center_div_num">
                <h1> {num} </h1>
                <div className="btn_div">
                    <button onClick={incNum}>Increm</button>
                    <button>Decrem</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default NumberList