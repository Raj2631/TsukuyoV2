import React from 'react';
import classes from './Search.module.css';

type props = {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
  val: string;
};

function Search(props: props) {
  return (
    <form onSubmit={props.submit} className={classes.Search}>
      <i className="fas fa-search"></i>
      <input
        value={props.val}
        onChange={props.changeHandler}
        type="text"
        placeholder="Search"
      />
    </form>
  );
}

export default Search;
