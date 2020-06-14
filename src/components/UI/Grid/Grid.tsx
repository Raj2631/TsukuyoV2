import React from 'react';
import classes from './Grid.module.css';
import Card from './Card/Card';
import { useHistory } from 'react-router-dom';

type props = {
  animeData: {
    image_url: string;
    mal_id: number;
    title: string;
  }[];
};

function Grid(props: props) {
  const history = useHistory();
  const clickHandler = (id: number) => {
    history.push(`/id/${id}`);
  };
  return (
    <div className={classes.Container}>
      {props.animeData.map((item) => {
        return (
          <Card key={item.mal_id} clickHandle={clickHandler} anime={item} />
        );
      })}
    </div>
  );
}

export default Grid;
