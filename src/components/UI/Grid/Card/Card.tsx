import React from 'react';
type props = {
  anime: any;
};

function Card(props: props) {
  return <img src={props.anime.image_url} alt="Anime img" />;
}

export default Card;
