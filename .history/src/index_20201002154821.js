import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards'



ReactDOM.render( 
  <>
    <Card 
     imgsrc="https://picsum.photos/500/300"
     sname="DARK" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
     />
    <Card
      imgsrc="https://picsum.photos/500/330"
     sname="Extra Carricular" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
     />
    <Card 
      imgsrc="https://picsum.photos/500/340"
     sname="MasterCard" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
    />
  </>, document.getElementById('root') );