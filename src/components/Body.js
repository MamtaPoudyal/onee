import React, { useEffect, useState } from 'react';
import './css/Body.css';

const Body = () => {
  const [menuSections, setMenuSections] = useState([]);

  useEffect(() => {
    fetch('/services.json')  // Ensure this path is correct
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMenuSections(data['menu-section']))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="hero-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <h1 className="hero-title">Flavors Inspired by the Seasons</h1>
        <p className="hero-subtitle">Come with family & feel the joy of mouthwatering food</p>
        <a href="#" className="hero-button">View Our Menu</a>
      </div>

      {/* Menu Section Inside Hero */}
      <div className="menu-section">
        <h2 className="menu-title">We Offer Top Notch</h2>
        <p className="menu-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="menu-items">
          {menuSections.map(section => (
            <div key={section.id} className="menu-item">
              <img src={section.image} alt={section.title} className="menu-image"/>
              <h3>{section.title}</h3>
              <a href={section.link} className="menu-link">See More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
