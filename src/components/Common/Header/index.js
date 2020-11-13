import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
        <div className="header">
            <a
              className="header__link header__title"
              href="/app"
              rel="noopener noreferrer"
            >
              Home
            </a>
            <a
              className="header__link header__title"
              href="/counter"
              rel="noopener noreferrer"
            >
              Counter
            </a>
        </div>
    </header>
  );
};

export default Header;


