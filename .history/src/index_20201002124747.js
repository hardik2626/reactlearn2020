import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import './index.css';

const myname = 'Hardik Devani';
let greeting = '';
let cssStyle = { };
let defineTIme  = '';

//let curDate = new Date(2020,9,20,20);
let curDate = new Date();
curDate = curDate.getHours();

if(curDate >= 1 && curDate <12){
  greeting = 'Good Morning';
  cssStyle.color = "green";
} else if(curDate>=12 && curDate <19) {
  // greeting = 'Good Afternoon';
  // cssStyle.color = 'orange'; 
  defineTIme = "morning";
} else{
  greeting = 'Good Night';
  cssStyle.color = "purple";
}



ReactDOM.render(
  <>
  <div>
    <h1>
      Hello {myname}, <span style={cssStyle}> {greeting} { defineTIme &&  <Demo /> } </span>
      
    </h1>
  </div>
  </>,
  document.getElementById('root')
);