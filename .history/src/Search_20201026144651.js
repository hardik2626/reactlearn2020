import React, { useState } from 'react'

const  Search = () => {
    const [img, setImg] = useState('')
    const inputEvent = (event) => {
        const data = event.target.value
        console.log(data)
    }

    return (
        <div>
            <div className="searchbar">
            <h1>Hello Search</h1>
            <input type="text" placeholder="Search Anything" onChange={inputEvent} value={} />
        </div>
        </div>
    )
}

export default Search
