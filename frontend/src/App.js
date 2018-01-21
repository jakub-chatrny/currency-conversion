import React, { Component } from 'react';
import logo from './piggy-bank.svg';
import './App.css';
import CurrencyConverter from "./components/CurrencyConverter";
import ConversionStats from "./components/CoversionStats";

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Currency converter</h1>
        </header>
        <ConversionStats />
        <CurrencyConverter />
        <div className="App-footer">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
);

export default App;
