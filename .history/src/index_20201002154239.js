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
     imgsrc="https://i.pinimg.com/originals/67/5e/bc/675ebc2fd210a8bd5362928a51514960.jpg"
     sname="DARK" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
     />
    <Card
      imgsrc="https://i.pinimg.com/originals/67/5e/bc/675ebc2fd210a8bd5362928a51514960.jpg"
     sname="Extra Carricular" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
     />
    <Card 
      imgsrc="https://i.pinimg.com/originals/67/5e/bc/675ebc2fd210a8bd5362928a51514960.jpg"
     sname="MasterCard" 
     title=" A Netflix Original Series" 
     link="https://www.google.com/"
    />
  </>, document.getElementById('root') );