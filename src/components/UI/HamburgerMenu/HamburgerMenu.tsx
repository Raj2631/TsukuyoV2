import React from 'react';
import classes from './HamburgerMenu.module.css';

type props = {
  click: () => void;
};

function HamburgerMenu(props: props) {
  return (
    <div onClick={props.click} className={classes.Menu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default HamburgerMenu;
