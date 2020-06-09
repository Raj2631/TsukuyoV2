import React from 'react';
import classes from './Grid.module.css';

type props = {
  animeData: object[] | null;
};

function Grid(props: props) {
  return (
    <div className={classes.Container}>
      {props.animeData?.map((item: any) => {
        return (
          props.animeData && (
            <img key={item.mal_id} src={item.image_url} alt="Anime img" />
          )
        );
      })}
    </div>
  );
}

export default Grid;
