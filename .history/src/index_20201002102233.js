import React from 'react';
import ReactDOM from 'react-dom';

const myname = 'Hardik Devani';
let greeting = '';
let cssStyle = { };

//let curDate = new Date(2020,9,20,23);
let curDate = new Date();
curDate = curDate.getHours();

if(curDate >= 1 && curDate <12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
} else if(curDate>=12 && curDate <19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange'; 
} else{
  greeting = 'Good Night';
  cssStyle.color = 'purple';
}



ReactDOM.render(
  <h1>Hello {myname}, {greeting}</h1>,
  document.getElementById('root')
);