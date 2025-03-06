import React from 'react';
import './Body.css'; 

function service(props) {
  return (
    <div className="services">
      <img src={props.image} alt={`${props.name}'s picture`} />
      <div className="text-content">
        <h3>Name: {props.name}</h3>
        
      </div>
    </div>
  );
}


export default service
