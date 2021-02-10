import { useState, useEffect } from 'react';
import { API } from '../../utility';
import axios from 'axios';

type AnimeData = {
  image_url: string;
  mal_id: number;
  title: string;
}[];

type Props = {
  page: number;
  endpoint: string;
};

const useGetAnime = ({ page, endpoint }: Props) => {
  const [animeData, setAnimeData] = useState<AnimeData>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await axios.get(`${API}/${page}/${endpoint}`);

        setAnimeData(data?.data?.top);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    }
    fetchData();
  }, [page, endpoint]);

  return {
    animeData,
    loading,
    error,
  };
};

export default useGetAnime;
