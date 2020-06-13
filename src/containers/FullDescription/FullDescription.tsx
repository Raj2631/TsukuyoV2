import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './FullDescription.module.css';

type animeData = {
  image_url: string;
  synopsis: string;
  title: string;
  score: number;
};

type liked = {
  title: string;
  image_url: string;
  id: any;
};

type likedArr =
  | {
      title: string;
      image_url: string;
      id: any;
    }[]
  | null;

type props = {
  liked: likedArr;
  updateLikedArr: (item: liked) => void;
};

function FullDescription() {
  const [animeData, setAnimeData] = useState<null | animeData>(null);
  const { id } = useParams();

  useEffect(() => {
    let setState = true;
    async function fetchData() {
      try {
        const res = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
        const data = await res.json();
        console.log(data);
        if (setState) {
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
  }, [id]);

  return (
    <div style={{ overflow: 'hidden' }}>
      {animeData && (
        <>
          <h1 style={{ color: '#fff' }}>{animeData.title}</h1>
          <div className={classes.Flex}>
            <div style={{ width: '30%', height: '50%' }}>
              <img
                style={{ height: '100%', width: '100%' }}
                src={animeData.image_url}
                alt={animeData.title}
              />
            </div>
            <div className={classes.Main}>
              <h1>Synopsis</h1>
              <p>
                {animeData.synopsis.replace('[Written by MAL Rewrite]', '')}
              </p>
              <h2>
                <span>Rating:</span> {animeData.score}
              </h2>
              <button className={classes.NotLiked}>Add favorites</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FullDescription;
