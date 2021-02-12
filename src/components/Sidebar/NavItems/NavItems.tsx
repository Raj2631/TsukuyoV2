import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItems.module.css';

interface props {
  closeSidebar: () => void;
}

function NavItems({ closeSidebar }: props) {
  const routes = [
    {
      path: '/',
      name: 'Top Rated',
      exact: true,
    },
    {
      path: '/ongoing',
      name: 'Ongoing',
    },
    {
      path: '/popular',
      name: 'Popular',
    },
    {
      path: '/favorites',
      name: 'Favorites',
    },
  ];

  return (
    <div className={classes.NavItems}>
      {routes.map((route) => (
        <div key={route.path} onClick={closeSidebar}>
          <NavLink
            exact={route.exact}
            to={route.path}
            activeStyle={{ color: '#fff' }}
          >
            {route.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default NavItems;
