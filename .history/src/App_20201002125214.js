import React from 'react';


function App() {
  //let curDate = new Date(2020,9,20,20);
let curDate = new Date();
curDate = curDate.getHours();

if(curDate >= 1 && curDate <12){
  greeting = 'Good Morning';
  cssStyle.color = "green";
} else if(curDate>=12 && curDate <19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange'; 
} else{
  greeting = 'Good Night';
  cssStyle.color = "purple";
}
}

export default App;
