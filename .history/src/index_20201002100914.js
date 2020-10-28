import React from 'react';
import ReactDOM from 'react-dom';

const myname = 'Hardik Devani';


let curDate = new Date();
curDate = curDate.getHours();




ReactDOM.render(
  <h1>Hello {myname}, {curDate}</h1>,
  document.getElementById('root')
);