import React from 'react';
import classes from './Card.module.css';

type props = {
  anime: any;
};

function Card(props: props) {
  return (
    <div className={classes.Card}>
      <img src={props.anime.image_url} alt="Anime img" />
    </div>
  );
}

export default Card;
