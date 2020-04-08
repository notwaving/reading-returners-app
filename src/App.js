import React from 'react';
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js'
import ReadingListTitle from './ReadingListTitle'
import ReadingList from './ReadingList.js';
import ArchiveTitle from './ArchiveTitle.js'
import Archive from './Archive.js';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <SearchBar />
      <ReadingListTitle />
      <ReadingList bookListing = {["Quiet", "Susan Cain"]}/>
      <ReadingList bookListing = {["Lost in a Good Game", "Pete Etchells"]}/>
      <ReadingList bookListing = {["La Belle Sauvage", "Philip Pullman"]}/>
      <ArchiveTitle />
      <Archive bookListing = {["The Crimson Petal and the White", "Michel Faber"]}/>
      <Archive bookListing = {["Introducing HTML 5", "Bruce Lawson & Remy Sharp"]}/>
      <Archive bookListing = {["The Amber Spyglass", "Philip Pullman"]}/>
    </div>
  );
}

export default App;
