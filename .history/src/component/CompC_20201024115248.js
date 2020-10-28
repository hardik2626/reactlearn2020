import React from 'react'
import { NameAPI, LNameAPI } from 'App/'
const CompC = () => {
    return (
        <div>
           <NameAPI.Consumer>
            {(fnameapi) => {
                return(
                    <LNameAPI.Consumer>
                        {(lname) => {
                            return(
                                <h1>
                                    {fnameapi} {lname} 
                                </h1>
                            )
                        }}
                    </LNameAPI.Consumer>
                )
            }}
        </NameAPI.Consumer>
        <LNameAPI />
        </div>
    )
}

export default CompC
