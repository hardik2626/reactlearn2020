import React from 'react'
import FirstnameAPI from './App'
const CompC = () => {
    return (
        
        <FirstnameAPI.Consumer>
            {() => {

            }}
        </FirstnameAPI.Consumer>
        <div>
            <h1>Comp C</h1>
        </div>
    )
}

export default CompC
