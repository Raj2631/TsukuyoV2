import React, { useState } from 'react';
import Grid from '../../components/UI/Grid/Grid';
import useGetAnime from '../../components/useGetAnime/useGetAnime';

const endpoint = 'tv';

function Top() {
  const [page] = useState<number>(1);
  const { animeData, loading } = useGetAnime({ page, endpoint });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Top Animes</h1>
      <Grid animeData={animeData} />
    </>
  );
}

export default Top;
