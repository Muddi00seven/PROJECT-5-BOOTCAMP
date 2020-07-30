import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/header/Navigation'
function App() {
  return (
    <>
    <div className="App">
      <Navigation/>
      <Home/>

    </div>
    </>
  );
}

export default App;
