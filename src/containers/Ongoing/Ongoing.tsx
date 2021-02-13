import React from 'react';
import { Waypoint } from 'react-waypoint';
import Grid from '../../components/UI/Grid/Grid';
import useGetAnime from '../../components/useGetAnime/useGetAnime';

const endpoint = 'airing';

function Ongoing() {
  const { animeData, loading, error, fetchNextPage } = useGetAnime({
    endpoint,
  });

  if (loading && !animeData) {
    return <p>Loading...</p>;
  }

  if (error && !animeData) {
    return <p>Oops!! Something went wrong, please try again later.</p>;
  }

  return (
    <>
      <h1>Ongoing Animes</h1>
      <Grid animeData={animeData} />
      <Waypoint topOffset="50px" onEnter={() => fetchNextPage()} />
      {loading && animeData && <p>Loading...</p>}
      {error && animeData && <p>Oops!! There is no more data!</p>}
    </>
  );
}

export default Ongoing;
