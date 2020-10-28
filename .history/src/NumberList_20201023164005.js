import React, { Component } from 'react'
import { useState } from 'react'

const NumberList = () => {
    const[num, setNum] = useState(0)
    return(
        <>
            <div className="main_div_num">
                <div className="center_div_num">
                <h1> {} </h1>
                <div className="btn_div">
                    <button>Increm</button>
                    <button>Decrem</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default NumberList