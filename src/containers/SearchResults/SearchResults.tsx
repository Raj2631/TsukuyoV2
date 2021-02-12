import React from 'react';
import { useParams } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import Grid from '../../components/UI/Grid/Grid';
import useSearchAnime from '../../components/useSearchAnimes/useSearchAnime';
interface IRouterParams {
  query: string;
}

function SearchResults() {
  const { query } = useParams<IRouterParams>();
  const { animeData, loading, error, fetchNextPage } = useSearchAnime({
    query,
  });
  if (loading && !animeData) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops, either the data doesn't exist, or something went wrong</p>;
  }
  return (
    <>
      <h1>Search results for : {query}</h1>
      <Grid animeData={animeData} />
      <Waypoint topOffset="50px" onEnter={() => fetchNextPage()} />
    </>
  );
}

export default SearchResults;
