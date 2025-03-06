import React from 'react';
import './Body.css'; 

function Greeting(props) {
  return (
    <div className="greeting">
      <img src={props.image} alt={`${props.name}'s picture`} />
      <div className="text-content">
        <h3>Name: {props.name}</h3>
        <h3>Place: {props.location}</h3>
        <h3>Contact:{props.contact}</h3>
      </div>
    </div>
  );
}


export default Greeting
