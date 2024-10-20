import React from 'react';

import './Header.css';

const Header = () => (
  <div className='glass-header'>
  <header>
    <h1>MountainMeals</h1>
    <div className='navbar'>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
    </div>
  </header>
  </div>
);

export default Header;
