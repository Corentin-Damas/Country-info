import { useState } from "react";
function SearchFilter({setSearch}){
    const [searchText, setSearchText] = useState("");
  
    function handleSearch(event) {
      const searchWord = event.target.value;
  
      if (event.key === "Enter") {

        setSearch(searchWord);
      }
    }
  
    function handleChange(event) {
      setSearchText(event.target.value);
    }
  
    return (
      <>
        <div className={`searchBar`}>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                fill="none"
                stroke="#070508"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
              />
            </svg>
          <input
            className="searchInput"
            type="text"
            placeholder="Search ..."
            onChange={handleChange}
            value={searchText}
            onKeyDown={handleSearch}
          />
        </div>

      </>
    );
}

export default SearchFilter
