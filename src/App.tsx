import React from 'react';
import logo from './assets/logo.svg';
import './css/App.css';
import NavBar from './components/NavBar';

const navItems = ['Home', 'About', 'Contact'];

function App() {
  return (
    <div className="App">
      <NavBar navItems={navItems}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
