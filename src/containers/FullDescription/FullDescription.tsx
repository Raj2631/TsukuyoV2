import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './FullDescription.module.css';

type animeData = {
  image_url: string;
  synopsis: string;
  title: string;
  score: number;
  mal_id: number;
};

type liked = {
  title: string;
  image_url: string;
  mal_id: number;
};

type likedArr = liked[];

type props = {
  addToFav: (item: liked) => void;
  removeFromFav: (id: number) => void;
  likedArr: likedArr;
};

interface IRouterParams {
  id: string;
}

function FullDescription(props: props) {
  const [animeData, setAnimeData] = useState<null | animeData>(null);
  const { id } = useParams<IRouterParams>();

  const [isLiked, setIsLiked] = useState<boolean>();

  useEffect(() => {
    let setState = true;
    async function fetchData() {
      try {
        const res = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
        const data = await res.json();

        if (setState) {
          const animeExists = props.likedArr.some(
            (anime) => anime.mal_id === data.mal_id
          );

          if (animeExists) {
            setIsLiked(true);
          } else setIsLiked(false);
          setAnimeData(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    return () => {
      setState = false;
    };
  }, [id, props.likedArr]);

  let btn;
  if (animeData) {
    const item: liked = {
      mal_id: animeData.mal_id,
      image_url: animeData.image_url,
      title: animeData.title,
    };

    btn = isLiked ? (
      <button
        onClick={() => props.removeFromFav(animeData.mal_id)}
        className={classes.Liked}
      >
        Remove from Favorites
      </button>
    ) : (
      <button onClick={() => props.addToFav(item)} className={classes.NotLiked}>
        Add to Favorites
      </button>
    );
  }

  return (
    <div className={classes.FullDescription}>
      {animeData && (
        <>
          <h1>{animeData.title}</h1>
          <div className={classes.Flex}>
            <div className={classes.box1}>
              <img src={animeData.image_url} alt={animeData.title} />
            </div>
            <div className={classes.Main}>
              <h1>Synopsis</h1>
              <p>
                {animeData.synopsis.replace('[Written by MAL Rewrite]', '')}
              </p>
              <h2>
                <span>Rating:</span> {animeData.score}
              </h2>
              {btn}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FullDescription;
