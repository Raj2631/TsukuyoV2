import React, { CSSProperties, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/UI/Search/Search';
import Popular from './containers/Popular/Popular';
import Top from './containers/Top/Top';
import Favorites from './containers/Favorites/Favorites';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState<any>(null);

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

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchInput('');
    setSearch(<Redirect to={`/search/${searchInput}`} />);
  };

  return (
    <div className="App">
      {search}
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
            <Route path="/favorites" component={Favorites} />
            <Route exact path="/search/:query" component={SearchResults} />
          </Switch>
        </main>
      </section>
    </div>
  );
}

export default App;
