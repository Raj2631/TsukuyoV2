import React from 'react';
import classes from './Search.module.css';

function Search() {
  return (
    <form className={classes.Search}>
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search" />
    </form>
  );
}

export default Search;
