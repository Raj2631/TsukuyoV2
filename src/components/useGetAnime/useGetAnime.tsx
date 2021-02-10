import { useQuery } from 'react-query';
import { API } from '../../utility';
import axios from 'axios';

type Props = {
  page: number;
  endpoint: string;
};

const useGetAnime = ({ page, endpoint }: Props) => {
  const { data, isFetching, isError } = useQuery('animeData', () =>
    axios.get(`${API}/${page}/${endpoint}`)
  );

  return {
    animeData: data?.data?.top,
    loading: isFetching,
    error: isError,
  };
};

export default useGetAnime;
