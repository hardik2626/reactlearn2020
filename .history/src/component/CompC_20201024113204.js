import React from 'react'
import NameAPI from './App'
const CompC = () => {
    return (
        <div>
           <NameAPI.Consumer>
            {(fnameapi) => {
                return  <h1>{fnameapi}</h1>
            }}
        </NameAPI.Consumer>
        </div>
    )
}

export default CompC
