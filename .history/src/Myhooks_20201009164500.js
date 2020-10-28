import React, { useState } from 'react';
let count = 1;
const state = useState();
const[count, setCount] = useState(5);

const IncNum = () => {
        setCount(count + 5)
        //console.log("clicked" + count++)
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