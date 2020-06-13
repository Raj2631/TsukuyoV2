import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import Grid from '../../components/UI/Grid/Grid';

interface props extends RouteComponentProps {}

function SearchResults(props: props) {
  const [animeData, setAnimeData] = useState<object[] | null>(null);
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

  return (
    <div>
      <Grid animeData={animeData} />
    </div>
  );
}

export default SearchResults;
