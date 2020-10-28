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


     { /* <Cards imgsrc={Sdata[1].imgsrc} sname={Sdata[1].sname} title={Sdata[1].title} link={Sdata[1].link} />
     <Cards imgsrc={Sdata[2].imgsrc} sname={Sdata[2].sname} title={Sdata[2].title} link={Sdata[2].link} /> */ }
     
  </>, document.getElementById('root') 
);