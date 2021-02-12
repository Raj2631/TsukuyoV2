import React from 'react';
import { Waypoint } from 'react-waypoint';
import Grid from '../../components/UI/Grid/Grid';
import useGetAnime from '../../components/useGetAnime/useGetAnime';

const endpoint = 'tv';

function Top() {
  const { animeData, loading, error, fetchNextPage } = useGetAnime({
    endpoint,
  });

  if (loading && !animeData) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops, either the data doesn't exist, or something went wrong</p>;
  }

  return (
    <>
      <h1>Top Rated Animes</h1>
      <Grid animeData={animeData} />
      <Waypoint topOffset="50px" onEnter={() => fetchNextPage()} />
      {error && animeData && <p>Oops!! There is no more data!</p>}
    </>
  );
}

export default Top;
