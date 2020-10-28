import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cards from './Cards'
import './index.css';
import Sdata from './Sdata'

//console.log(Sdata[1].sname);

/*function nCard(val){
  //console.log(val);
  return(
    <Cards 
     imgsrc={val.imgsrc}
     sname={val.sname}
     title={val.title}
     link={val.link}
     />
  )
}*/

const myname = 'Hardik Devani';
let greeting = '';
let cssStyle = { };

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

ReactDOM.render( 
  <>
  
  <App myname="ffffff" />

  
    <h1 className="heading_style">List of TOP 5 Netflix Series in 2020</h1>
    {/* {Sdata.map(nCard)}; */}

    {Sdata.map((val, index) => {
      console.log(index);
      return(
        <React.Fragment key={val.imgsrc}>
        <Cards  imgsrc={val.imgsrc} sname={val.sname} title={val.title} link={val.link} /> 
        </React.Fragment>
      ) 
      }
    )};

    Hello {myname}, <span style={cssStyle}> {greeting} </span>

     { /* <Cards imgsrc={Sdata[1].imgsrc} sname={Sdata[1].sname} title={Sdata[1].title} link={Sdata[1].link} />
     <Cards imgsrc={Sdata[2].imgsrc} sname={Sdata[2].sname} title={Sdata[2].title} link={Sdata[2].link} /> */ }
     
  </>, document.getElementById('root') 
);