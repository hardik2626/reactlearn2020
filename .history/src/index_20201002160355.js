import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards'



ReactDOM.render( 
  <>

    <h1>
      List of TOP 5 Netflix Series in 2020
    </h1>

    <Cards 
     imgsrc="https://picsum.photos/500/300"
     sname="DARK" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
     />
    <Cards
      imgsrc="https://picsum.photos/500/330"
     sname="Extra Carricular" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
     />
    <Cards 
      imgsrc="https://picsum.photos/500/340"
     sname="MasterCard" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
    />
  </>, document.getElementById('root') );