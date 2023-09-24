import React from 'react';
import './Cards.css';

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="images"/>
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button onClick={props.onClick} className="btn">Click Me</button>
      </div>
    </div>
  );
}

export default Card;
