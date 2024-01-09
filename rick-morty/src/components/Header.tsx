import React from 'react';
import logo from '../logo.png';

const Header: React.FC = () => {
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '60%',
          height: 'auto',
          margin: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Header;
