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

  if (error && !animeData) {
    return <p>Oops!! Something went wrong, please try again later.</p>;
  }

  return (
    <>
      <h1>Search results for : {query}</h1>
      <Grid animeData={animeData} />
      <Waypoint topOffset="50px" onEnter={() => fetchNextPage()} />
      {loading && animeData && <p>Loading...</p>}
      {error && animeData && <p>Oops!! There is no more data!</p>}
    </>
  );
}

export default SearchResults;
