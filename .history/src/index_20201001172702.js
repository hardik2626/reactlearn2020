//var React = require('react');
//var ReactDom = require('react-dom')

//import React, { Component } from 'react';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

const fname = 'Hardik Patel from Surat';
const lname = 'Aureatelabs';
const cha2 = 'Hardik';
const currDate = new Date().toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        });
const currTime = new Date().toLocaleTimeString();
ReactDom.render( 
<div>
  <h1>Hello Hardik AL Company List</h1>
  <p>List of Top 5 Company</p>
  <ol>
    <li>Dark</li>
    <li>Hello Mini</li>
    <li>Aashram</li>
    <li>Mr Robot</li>
  </ol>
<p>======================================================</p>
  <h1>Hello Hardik AL Company List {fname}</h1>
<p>======================================================</p>
  <h2>My number is {123+567}</h2>
  <h2>my Random number is {Math.random()}</h2>
<p>======================================================</p>
  <h5>{` ${fname} ${lname}`}</h5>
  <h3>these both are Template Literals</h3>
  <h5>Hey {`${fname}`}  and Company is {`${lname}`}</h5>
<p>======================================================</p>
<h1>Hello, My Name is {cha2}</h1>
<p>today date is {currDate}</p>
<p>Current Time is {currTime}</p>
<p>======================================================</p>
<h1 contentEditable="false">Hello Hardik AL Company List {fname}</h1>
</div>,
document.getElementById("root")
);