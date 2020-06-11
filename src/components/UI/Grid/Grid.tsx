import React from 'react';
import classes from './Grid.module.css';
import Card from './Card/Card';
import { Link } from 'react-router-dom';

type props = {
  animeData: object[] | null;
};

function Grid(props: props) {
  return (
    <div className={classes.Container}>
      {props.animeData?.map((item: any) => {
        return (
          <Link key={item.mal_id} to={`/id/${item.mal_id}`}>
            <Card anime={item} />
          </Link>
        );
      })}
    </div>
  );
}

export default Grid;
