import React from 'react';
import './App.scss';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
      <div>
        <div className="display">
          <CalculatorDisplay text="0"/>
        </div>

        <div className="clear0">
          <ActionButton text="clear"/>
          <ActionButton text="/" buttonStyle="red-bg"/>
      </div>
       
        <div className="row">
          <NumberButton text="7"/> 
          <NumberButton text="8"/>
          <NumberButton text="9"/>
          <NumberButton text="x" buttonStyle="red-bg"/>
        </div>

      <div className="row">
          <NumberButton text="4"/>
          <NumberButton text="5"/>
          <NumberButton text="6"/>
          <NumberButton text="-" buttonStyle="red-bg"/>
      </div>
      <div className="row">
          <NumberButton text="1"/>
          <NumberButton text="2"/>
          <NumberButton text="3"/>
          <NumberButton text="+" buttonStyle="red-bg"/>
      </div>

      <div className="clear0">
        <ActionButton text="0"/>
        <ActionButton text="=" buttonStyle="red-bg"/>
      </div>
    </div>
  );
};

export default App;
