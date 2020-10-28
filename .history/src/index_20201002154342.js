import React from 'react';
import ReactDOM from 'react-dom';

function Card(props){
  console.log(props)
  return(
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="ALPIC" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title"> {props.sname} </h3>
          <a href={props.link } target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>  
  </>
  )
}

ReactDOM.render( 
  <>
    <Card 
     imgsrc="https://picsum.photos/200/300"
     sname="DARK" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
     />
    <Card
      imgsrc="https://picsum.photos/200/350"
     sname="Extra Carricular" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
     />
    <Card 
      imgsrc="https://picsum.photos/200/340"
     sname="MasterCard" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
    />
  </>, document.getElementById('root') );