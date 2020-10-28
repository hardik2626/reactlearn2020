import React, { Component } from 'react'

const Eventhand = () => {
        const bgChange = () => {
                console.log('clickkk');
        }
        return(
                <>
                        <div className="evnt">
                                <button onClick={bgChange}>Click Me EventHandle</button>
                        </div>
                </>
        )
}
export default Eventhand;