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
  return (
    <div style={{ color: '#ffffff' }}>
      <h1 style={{ marginBottom: '4rem' }}>Your Favorite Animes</h1>
      {props.liked.length ? (
        <Grid animeData={props.liked} />
      ) : (
        <p>You don't have any animes marked as favorite.</p>
      )}
    </div>
  );
}

export default Favorites;
