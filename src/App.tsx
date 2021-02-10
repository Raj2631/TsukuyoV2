import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/UI/Search/Search';
import HamburgerMenu from './components/UI/HamburgerMenu/HamburgerMenu';
import Routes from './routes/Routes';

type liked = {
  title: string;
  image_url: string;
  mal_id: number;
};

type likeData = {
  title: string;
  image_url: string;
  mal_id: number;
}[];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [likedData, setLikedData] = useState<likeData>([]);
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('data') || '[]';
    setLikedData(JSON.parse(data));
  }, []);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/search/${searchInput}`);
    setSearchInput('');
  };

  const addDataToLocalStorage = (item: liked) => {
    const newLikedData = [...likedData, item];
    localStorage.setItem('data', JSON.stringify(newLikedData));
    setLikedData(newLikedData);
  };

  const removeDataFromLocalStorage = (id: number) => {
    let newLikedData = [...likedData];
    newLikedData = newLikedData.filter((anime) => anime.mal_id !== id);
    localStorage.setItem('data', JSON.stringify(newLikedData));
    setLikedData(newLikedData);
  };

  const toggleMenu = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Sidebar show={sidebar} closeSidebar={toggleMenu} />
        <section>
          <section className="Toolbar">
            <HamburgerMenu click={toggleMenu} />
            <p className="para">Animes</p>
            <Search
              val={searchInput}
              submit={submitHandler}
              changeHandler={inputChangeHandler}
            />
          </section>
          <main>
            <Routes
              addToFav={addDataToLocalStorage}
              removeFromFav={removeDataFromLocalStorage}
              likedData={likedData}
            />
          </main>
        </section>
      </QueryClientProvider>
    </div>
  );
}

export default App;
