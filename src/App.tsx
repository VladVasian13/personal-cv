import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Scroll from './Components/Scroll/Scroll';
import ScrollInfo from './Components/ScrollInfo/ScrollInfo';

function App() {
  return (
    <>
      <Navigation />
      <Scroll />
      <ScrollInfo />
    </>
  );
}

export default App;
