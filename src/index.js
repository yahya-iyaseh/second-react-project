import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav.js';
import Top from './components/Top.js';
import Mid from './components/Mid.js';
import Cards from './components/Cards.js';
ReactDOM.render(
  <React.StrictMode>
    <header>
      <Nav />
      <Top />
    </header>
    <main>
      <Mid />
      <Cards />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
