import React from 'react'
import { AllnameAPI } from './App'
const CompC = () => {
    return (
        <div>
           <AllnameAPI.Consumer>
            {(fnameapi) => {
                return  <h1>Comp C</h1>
            }}
        </AllnameAPI.Consumer>
        </div>
    )
}

export default CompC
