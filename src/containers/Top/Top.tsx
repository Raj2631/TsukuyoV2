import React, { useState, useEffect } from 'react';
import { API } from '../../utility';
import Grid from '../../components/UI/Grid/Grid';

function Top() {
  const [animeData, setAnimeData] = useState<object[] | null>(null);
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

  return (
    <div>
      <Grid animeData={animeData} />
    </div>
  );
}

export default Top;
