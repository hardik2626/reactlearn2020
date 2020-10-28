import React from 'react'
import logo from '../images/logo.png'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" width="150" height="70" />
            <h5>Google Keep</h5>
        </div>
    )
}

export default Header
