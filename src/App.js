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
      <ReadingList bookListing = {["Quiet", "Susan Cain"]}/>
      <ReadingList bookListing = {["Lost in a Good Game", "Pete Etchells"]}/>
      <ReadingList bookListing = {["La Belle Sauvage", "Philip Pullman"]}/>
      <Archive bookListing = {["The Crimson Petal and the White", "Michel Faber"]}/>
      <Archive bookListing = {["Introducing HTML 5", "Bruce Lawson & Remy Sharp"]}/>
      <Archive bookListing = {["The Amber Spyglass", "Philip Pullman"]}/>
    </div>
  );
}

export default App;
