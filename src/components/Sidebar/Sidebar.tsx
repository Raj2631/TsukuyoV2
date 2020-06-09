import React, { CSSProperties } from 'react';
import classes from './Sidebar.module.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  const logoStyle: CSSProperties = {
    margin: '1.6rem 0',
    fontFamily: 'Titillium Web, sans-serif',
    letterSpacing: 2,
  };
  return (
    <header className={classes.Sidebar}>
      <Link to="/">
        <h1 style={logoStyle}>
          TSU<span style={{ fontWeight: 400 }}>KUYO</span>
        </h1>
      </Link>
    </header>
  );
}

export default Sidebar;
