import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Home/>
      </HashRouter>
    </div>
  );
}

export default App;
