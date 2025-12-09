import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import classes from "./FullDescription.module.css";

type liked = {
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
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
  const { id } = useParams<IRouterParams>();
  const { data, isFetching, isError } = useQuery(["animeDetails", id], () =>
    axios.get(`https://api.jikan.moe/v4/anime/${id}`)
  );

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oops... Something went wrong.</p>;
  }

  const animeData = data?.data?.data;
  const existsInFavorites = props.likedArr.some(
    (anime) => anime.mal_id === animeData.mal_id
  );

  let btn;
  if (animeData) {
    const item: liked = {
      mal_id: animeData.mal_id,
      images: animeData.images,
      title: animeData.title,
    };

    btn = existsInFavorites ? (
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
              <img src={animeData.images.jpg.image_url} alt={animeData.title} />
            </div>
            <div className={classes.Main}>
              <h1>Synopsis</h1>
              <p>
                {animeData.synopsis.replace("[Written by MAL Rewrite]", "")}
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
