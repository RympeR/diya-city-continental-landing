import logo from './logo.svg';
import './App.css';
import React from 'react';
import { LangProvider } from "./utils/LangProvider";
// import React, { useContext, useEffect, useState } from "react";
// const { currentLang } = useContext(LangContext);

function App() {
  return (
    <LangProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
    </LangProvider>

  );
}

export default App;
