import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '../../components/UI/Grid/Grid';
import useSearchAnime from '../../components/useSearchAnimes/useSearchAnime';
interface IRouterParams {
  query: string;
}

function SearchResults() {
  const { query } = useParams<IRouterParams>();
  const [page] = useState(1);
  const { animeData, loading } = useSearchAnime({ page, query });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Search results for : {query}</h1>
      <Grid animeData={animeData} />
    </>
  );
}

export default SearchResults;
