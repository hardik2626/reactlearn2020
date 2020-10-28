import React from 'react'
import {NameAPI, LNameAPI} from './App'
const CompC = () => {
    return (
        <div>
           <NameAPI.Consumer>
            {(fnameapi) => {
                return(
                    <LNameAPI.Consumer>

                    </LNameAPI.Consumer>
                )  
                
                <h1>{fnameapi}</h1>
            }}
        </NameAPI.Consumer>
        </div>
    )
}

export default CompC
