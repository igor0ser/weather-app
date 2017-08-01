import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
  <header className="Header">
    <img src={logo} className="Header__logo" alt="logo" />
    <h2>Awesome Weather App</h2>
  </header>
);

export default Header;
