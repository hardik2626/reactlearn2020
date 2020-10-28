import React from 'react';

let greeting = '';
let cssStyle = { };

function Demo() {
    render(
        //<p style={color,"green"}>Good Morning</p>
        greeting = 'Good Morning';
        cssStyle.color = "green";
    )
}

export default Demo