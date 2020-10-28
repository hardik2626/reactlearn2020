import React, { Component } from 'react'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
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
                    <Button onClick={incNum}><AddIcon /> Increm</Button>
                    <Button onClick={decNum}><RemoveIcon /> Decrem</Button>
                </div>
                </div>
            </div>
        </>
    )
}
export default NumberList