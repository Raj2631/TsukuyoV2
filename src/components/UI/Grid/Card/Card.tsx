import React from "react";
import classes from "./Card.module.css";

type props = {
  anime: {
    images: {
      jpg: {
        image_url: string;
      };
    };
    mal_id: number;
    title: string;
  };
  clickHandle: (id: number) => void;
};

function Card(props: props) {
  return (
    <div
      onClick={() => props.clickHandle(props.anime.mal_id)}
      className={classes.Card}
    >
      <img src={props.anime.images.jpg.image_url} alt="Anime img" />
      <p className={classes.title}>{props.anime.title}</p>
    </div>
  );
}

export default Card;
