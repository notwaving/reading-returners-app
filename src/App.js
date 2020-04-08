import React from 'react';
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js'
import ReadingList from './ReadingList.js';
import Archive from './Archive.js';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <SearchBar />
      <ReadingList />
      <Archive />
    </div>
  );
}

export default App;
