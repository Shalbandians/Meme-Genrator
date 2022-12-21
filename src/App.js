import React from 'react';
import './App.css';
import Meme from './component/Meme';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Meme/>
    </div>
  );
}

export default App;
