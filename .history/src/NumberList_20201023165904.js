import React, { Component } from 'react'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const NumberList = () => {
    const[num, setNum] = useState(0)

    const incNum = () =>{
        setNum(num + 1)
    }

    const decNum = () =>{
        if(num > 0) {
            
        setNum(num - 1)
        } else {
            alert('0 Limit Reached.')
            setNum(0);
        }
    }
    return(
        <>
            <div className="main_div_num">
                <div className="center_div_num">
                <h1> {num} </h1>
                <div className="btn_div">
                    <button onClick={incNum}><AddIcon /> Increm</button>
                    <button onClick={decNum}><RemoveIcon />Decrem</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default NumberList