import React from 'react'
const Sresult = (props) =>{
    const image = `https://source.unsplash.com/450x400?${props.name}`;
    return (
        <div>
            <div>
            <img src={image} alt="logo" />
            </div>
        </div>
    )
}

export default Sresult
