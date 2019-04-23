import React from 'react';
import './Card.css';
import './CardContent';
import './CardBanner';

// will contain the div w/ border
// import banner
// import content

const CardContainer = () => {
    return (
      <div className="cardcontainer">
        <CardContent />
        <CardBanner />
      </div>
    );
  };
  
  export default CardContainer;
  
  