import { useState, useEffect } from 'react';
import axios from 'axios';

type AnimeData = {
  image_url: string;
  mal_id: number;
  title: string;
}[];

type Props = {
  page: number;
  query: string;
};

const useSearchAnime = ({ page, query }: Props) => {
  const [animeData, setAnimeData] = useState<AnimeData>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await axios.get(
          `https://api.jikan.moe/v3/search/anime?q=${query}&page=${page}`
        );

        setAnimeData(data?.data.results);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setError(true);
      }
    }
    fetchData();
  }, [page, query]);

  return {
    animeData,
    loading,
    error,
  };
};

export default useSearchAnime;
