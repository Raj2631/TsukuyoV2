import React from 'react';
import Grid from '../../components/UI/Grid/Grid';

type props = {
  liked: {
    mal_id: any;
    title: string;
    image_url: string;
  }[];
};

function Favorites(props: props) {
  return <Grid animeData={props.liked} />;
}

export default Favorites;
