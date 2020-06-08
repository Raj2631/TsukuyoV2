import React, { CSSProperties } from 'react';
import './App.css';

function App() {
  const style: CSSProperties = {
    marginBottom: '2rem',
    fontWeight: 500,
    textDecoration: 'underlined',
  };

  return (
    <div className="App">
      <h1 style={style}>Test</h1>
    </div>
  );
}

export default App;
