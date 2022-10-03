import React from "react";

function Search(props) {
  const { searchValue, handleSearchValue } = props;
  return (
    <div>
      <input
        value={searchValue}
        type="text"
        placeholder=""
        onChange={(event) => handleSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
