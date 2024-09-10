import React from 'react';
import logo from './logo.svg';
import './App.css';
import AudioStream from "./AudioStream";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <AudioStream />
      </header>
    </div>
  );
}

export default App;
