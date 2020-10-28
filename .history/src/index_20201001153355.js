//var React = require('react');
//var ReactDom = require('react-dom')

//import React, { Component } from 'react';
import React from 'react';
import ReactDom from 'react-dom';

const fname = 'Hardik Patel from Surat';

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
  <h1>Hello Hardik AL Company List {fname}</h1>
  <p>my number is {10+45}</p>
</div>,
document.getElementById("root")
);