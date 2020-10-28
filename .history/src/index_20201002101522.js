import React from 'react';
import ReactDOM from 'react-dom';

const myname = 'Hardik Devani';
let greeting = '';

let curDate = new Date(2020,9,20,15);
curDate = curDate.getHours();

if(curDate >= 1 && curDate <12){
  greeting = 'Good Morning';
} else if(curDate>=12 && curDate <19) {
  greeting = 'Good Afternoon';
} else{
  greeting = 'Good Night';
}



ReactDOM.render(
  <h1>Hello {myname}, {greeting}</h1>,
  document.getElementById('root')
);