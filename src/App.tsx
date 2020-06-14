import React, { CSSProperties, useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/UI/Search/Search';
import Popular from './containers/Popular/Popular';
import Top from './containers/Top/Top';
import Favorites from './containers/Favorites/Favorites';
import SearchResults from './containers/SearchResults/SearchResults';
import FullDescription from './containers/FullDescription/FullDescription';

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

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [likedData, setLikedData] = useState<likeData>([]);
  const history = useHistory();

  const styleToolbar: CSSProperties = {
    height: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const styleP: CSSProperties = {
    color: '#c4c4c4',
    fontWeight: 500,
    marginLeft: '2rem',
    fontSize: '18px',
  };

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

  return (
    <div className="App">
      <Sidebar />
      <section>
        <section style={styleToolbar}>
          <p style={styleP}>Animes</p>
          <Search
            val={searchInput}
            submit={submitHandler}
            changeHandler={inputChangeHandler}
          />
        </section>
        <main>
          <Switch>
            <Route exact path="/" component={Popular} />
            <Route path="/top" component={Top} />
            <Route
              path="/favorites"
              render={() => <Favorites liked={likedData} />}
            />
            <Route exact path="/search/:query" component={SearchResults} />
            <Route
              path="/id/:id"
              render={() => (
                <FullDescription
                  addToFav={addDataToLocalStorage}
                  removeFromFav={removeDataFromLocalStorage}
                  likedArr={likedData}
                />
              )}
            />
          </Switch>
        </main>
      </section>
    </div>
  );
}

export default App;
