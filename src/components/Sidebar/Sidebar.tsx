import React from 'react';
import classes from './Sidebar.module.css';
import { Link } from 'react-router-dom';

import NavItems from './NavItems/NavItems';
import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';

type props = {
  show: boolean;
  closeSidebar: () => void;
};

function Sidebar({ show, closeSidebar }: props) {
  const sidebarClasses = show
    ? `${classes.Sidebar} ${classes.Show}`
    : classes.Sidebar;

  return (
    <header className={sidebarClasses}>
      <div className={classes.CloseMenuDiv}>
        <HamburgerMenu click={closeSidebar} />
      </div>
      <Link to="/" onClick={closeSidebar}>
        <h1 className={classes.Logo}>
          TSU<span style={{ fontWeight: 400 }}>KUYO</span>
        </h1>
      </Link>
      <nav>
        <NavItems closeSidebar={closeSidebar} />
      </nav>
    </header>
  );
}

export default Sidebar;
