import React from 'react';
let count = 1;
const IncNum = () => {

}
const Myhooks = () => {
        return(
                <>
                <h1>{count}</h1>
                <button onCLick={IncNum}>Click Me</button>
                </>
        )
}
export default Myhooks