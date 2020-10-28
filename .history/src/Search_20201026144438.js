import React, { useState } from 'react'

const  Search = () => {
    const [img, setImg] = useState('')
    return (
        <div>
            <div className="searchbar">
            <h1>Hello Search</h1>
            <input type="text" placeholder="Search Anything" />
        </div>
        </div>
    )
}

export default Search
