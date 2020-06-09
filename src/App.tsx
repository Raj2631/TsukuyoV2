import React, { CSSProperties } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/UI/Search/Search';

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
      <main>
        <section style={styleToolbar}>
          <p style={styleP}>Popular</p>
          <Search />
        </section>
      </main>
    </div>
  );
}

export default App;
