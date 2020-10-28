import React, { Component } from 'react'
import { useState } from 'react'

const NumberList = () => {
    const[num, setNum] = useState(0)

    const incNum = () =>{
        setNum(num + 1)
    }

    const decNum = () =>{
        if(num > 0) {
            alert('fsdfdsf')
        }
        setNum(num - 1)
    }
    return(
        <>
            <div className="main_div_num">
                <div className="center_div_num">
                <h1> {num} </h1>
                <div className="btn_div">
                    <button onClick={incNum}>Increm</button>
                    <button onClick={decNum}>Decrem</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default NumberList