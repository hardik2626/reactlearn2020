import React, { useState } from 'react';
const state = useState
let count = 1;
const IncNum = () => {
        console.log("clicked" + count++)
};
const Myhooks = () => {
        return(
                <>
                <h1>{count}</h1>
                <button onClick={IncNum}>Click Me</button>
                </>
        )
}
export default Myhooks