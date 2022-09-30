import React from "react";

function Search({ search, searchTrans}) {
 
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={search}
        onChange={(e) => searchTrans(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
