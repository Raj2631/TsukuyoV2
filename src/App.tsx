import React, { CSSProperties } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/UI/Search/Search';
import Popular from './containers/Popular/Popular';
import Top from './containers/Top/Top';
import Favorites from './containers/Favorites/Favorites';

function App() {
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

  return (
    <div className="App">
      <Sidebar />
      <section>
        <section style={styleToolbar}>
          <p style={styleP}>Animes</p>
          <Search />
        </section>
        <main>
          <Route exact path="/" component={Popular} />
          <Route path="/top" component={Top} />
          <Route path="/favorites" component={Favorites} />
        </main>
      </section>
    </div>
  );
}

export default App;
