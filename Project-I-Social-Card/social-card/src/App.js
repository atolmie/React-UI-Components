import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardBanner from './components/CardComponents/CardBanner';

const App = () => {
  return (
    <div className="container">
      <div className="left">
        <ImageThumbnail />
      </div>
      <div className="right">
        <Header />
         <div className="cardcontainer">
         <CardBanner />
         </div>
      </div>
    </div>

   
  );
};

export default App;
