import React from 'react';
import AuthForm from './AuthForm';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="logo" />
      <h2>Awesome Weather App</h2>
      <AuthForm />
    </header>
);

export default Header;
