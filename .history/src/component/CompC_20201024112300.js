import React from 'react'
import { FirstnameAPI } from './App'
const CompC = () => {
    return (
        <div>
           <FirstnameAPI.Consumer>
            {(fnameapi) => {
            return  <h1>Comp C</h1>
            }}
        </FirstnameAPI.Consumer>
        </div>
    )
}

export default CompC
