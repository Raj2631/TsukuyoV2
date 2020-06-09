import React, { useState, useEffect } from 'react';
import { API } from '../../utility';

function Top() {
  const [animeData, setAnimeData] = useState<object[] | null>(null);
  const [page, pageSet] = useState<number>(1);

  useEffect(() => {
    let setState = true;
    async function fetchData() {
      try {
        const res = await fetch(`${API}/${page}/tv`);
        const data = await res.json();
        console.log(data.top);
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

  return <div></div>;
}

export default Top;
