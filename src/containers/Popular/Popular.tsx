import React, { useState } from 'react';

import Grid from '../../components/UI/Grid/Grid';
import useGetAnime from '../../components/useGetAnime/useGetAnime';

const endpoint = 'bypopularity';

function Popular() {
  const [page] = useState<number>(1);
  const { animeData, loading } = useGetAnime({ page, endpoint });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Popular Animes</h1>
      <Grid animeData={animeData} />
    </>
  );
}

export default Popular;
