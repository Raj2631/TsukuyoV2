import React, { useState, useEffect } from 'react';
import { API } from '../../utility';
import Grid from '../../components/UI/Grid/Grid';

type animeData = {
  image_url: string;
  mal_id: number;
  title: string;
}[];

function Top() {
  const [animeData, setAnimeData] = useState<animeData>([]);
  const [page] = useState<number>(1);

  useEffect(() => {
    let setState = true;
    async function fetchData() {
      try {
        const res = await fetch(`${API}/${page}/tv`);
        const data = await res.json();
        if (setState) {
          setAnimeData(data.top);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    return () => {
      setState = false;
    };
  }, [page]);

  return <Grid animeData={animeData} />;
}

export default Top;
