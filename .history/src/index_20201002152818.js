import React from 'react';
import ReactDOM from 'react-dom';

function Card(){
  return(
    <>
    <div className="cards">
      <div className="card">
        <img src="https://i.pinimg.com/originals/67/5e/bc/675ebc2fd210a8bd5362928a51514960.jpg" alt="ALPIC" className="card__img" />
        <div className="card__info">
          <span className="card__category"> A Netflix Original Series</span>
          <h3 className="card__title"> Dark </h3>
          <a href="" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>  
  </>
  )
}

ReactDOM.render(
  <Card/>,
  document.getElementById('root')
);