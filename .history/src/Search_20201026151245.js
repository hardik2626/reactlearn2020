import React, { useState } from 'react'
import Sresult from './Sresult'

const  Search = () => {
    const [img, setImg] = useState('')
    const inputEvent = (event) => {
        const data = event.target.value
        console.log(data)
        setImg(data)
    }

    return (
        <div>
            <div className="searchbar">
            <h1>Hello Search</h1>
            <input type="text" placeholder="Search Anything" onChange={inputEvent} value={img} />
            {img === "" ? null : <Sresult name={img} />}
            </div>
        </div>
    )
}

export default Search
