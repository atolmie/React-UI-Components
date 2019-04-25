import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

// will contain the div w/ border
// import banner
// import content

const CardContainer = () => {
    return (
      <a href="https://www.reactjs.org" className="cardcontainer">
        <CardBanner />
        <CardContent />
      </a>
    );
  };
  
  export default CardContainer;
  
  