import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '../../components/UI/Grid/Grid';

type animeData = {
  image_url: string;
  mal_id: number;
  title: string;
}[];

function SearchResults() {
  const [animeData, setAnimeData] = useState<animeData>([]);
  const [page] = useState<number>(1);
  const { query } = useParams();

  useEffect(() => {
    let setState = true;
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.jikan.moe/v3/search/anime?q=${query}&page=${page}`
        );
        const data = await res.json();
        console.log(data.results);
        if (setState) {
          setAnimeData(data.results);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    return () => {
      setState = false;
    };
  }, [query, page]);

  return <Grid animeData={animeData} />;
}

export default SearchResults;
