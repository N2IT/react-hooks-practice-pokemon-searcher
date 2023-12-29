import React from "react";



function Search({ search, onSearchInput }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        onChange={(e) => onSearchInput(e.target.value)} 
        className="prompt"
        value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
