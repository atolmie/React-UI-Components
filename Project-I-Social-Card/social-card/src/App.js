import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="container">
      <div className="left">
        <ImageThumbnail />
      </div>
      <div className="right">
        <Header />
        <CardContainer />
         
      </div>
      
    </div>

   
  );
};

export default App;
