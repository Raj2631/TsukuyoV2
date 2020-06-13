import React from 'react';
import Grid from '../../components/UI/Grid/Grid';

type props = {
  liked: {
    id: any;
    title: string;
    image_url: string;
  }[];
};

function Favorites(props: props) {
  return (
    <div>
      <Grid animeData={props.liked} />
    </div>
  );
}

export default Favorites;
