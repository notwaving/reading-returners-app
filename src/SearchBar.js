import React from 'react';

function SearchBar() {
  return (
    <div className="container-fluid padding">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search..."></input>
        <div className="input-group-append">
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;