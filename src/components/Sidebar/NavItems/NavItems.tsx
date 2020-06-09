import React, { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItems.module.css';

function NavItems() {
  const styleLinks: CSSProperties = {
    color: 'var(--white)',
    marginBottom: '2rem',
    fontSize: '20px',
  };
  return (
    <div className={classes.NavItems}>
      <div style={styleLinks}>
        <NavLink exact activeStyle={{ color: '#fff' }} to="/">
          Popular
        </NavLink>
      </div>
      <div style={styleLinks}>
        <NavLink activeStyle={{ color: '#fff' }} to="/top">
          Top
        </NavLink>
      </div>
      <div style={styleLinks}>
        <NavLink activeStyle={{ color: '#fff' }} to="/favorites">
          Favorites
        </NavLink>
      </div>
    </div>
  );
}

export default NavItems;
