import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div>
            <div className="setStyle2">
                <h1>404 Error Page</h1>
                <p>Welcome to Unknown World</p>
                <NavLink exact to="/">Go Back</NavLink>
            </div>
        </div>
    )
}

export default Errorpage
