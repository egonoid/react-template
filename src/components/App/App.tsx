import React from 'react';
import logo from '../../logo.svg';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>egonoid React Template</h1>
        <p>Happy Coding!</p>
        <a
          className="App-link"
          href="https://www.egonoid.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.egonoid.com
        </a>
      </header>
    </div>
  );
};

export default App;
