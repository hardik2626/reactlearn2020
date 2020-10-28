import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards'
import './index.css';
import Sdata from './Sdata'

//console.log(Sdata[1].sname);

ReactDOM.render( 
  <>

    <h1 className="heading_style">
      List of TOP 5 Netflix Series in 2020
    </h1>

    <Cards 
     imgsrc={Sdata[0].imgsrc}
     sname={Sdata[0].sname}
     title={Sdata[0].title}
     link={Sdata[0].link}
     />
     <Cards 
     imgsrc={Sdata[1].imgsrc}
     sname={Sdata[1].sname}
     title={Sdata[1].title}
     link={Sdata[1].link}
     />
     <Cards 
     imgsrc={Sdata[2].imgsrc}
     sname={Sdata[2].sname}
     title={Sdata[2].title}
     link={Sdata[2].link}
     />
     <Cards 
     imgsrc={Sdata[3].imgsrc}
     sname={Sdata[3].sname}
     title={Sdata[3].title}
     link={Sdata[3].link}
     />
     <Cards 
     imgsrc={Sdata[4].imgsrc}
     sname={Sdata[4].sname}
     title={Sdata[4].title}
     link={Sdata[4].link}
     />
  </>, document.getElementById('root') );