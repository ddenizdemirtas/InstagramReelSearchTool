import React from "react";
import { useState } from 'react';
import "../Styles/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [dataResult, setDataResult] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setDataResult([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (wordEntered === "") {
      setFilteredData([]);
      window.location.reload(); // reload the page
    } else {
      axios
        .get(`http://localhost:3002/search/${wordEntered.toLowerCase()}`)
        .then((response) => {
          console.log("DEBUG: ", response.data);
          setDataResult(response.data); // set the state with the response data
        })
        .catch((err) => console.log("ERROR ", err))
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <div className="searchIcon">
          {wordEntered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {
  dataResult.map((d) => (
    <div key={d.url} className="block-container">
      <a href={d.url} target="_blank">
        <img src={d.cover_image} alt={dataResult} className="block-image"/>
      </a>
      {/* <div className="block-caption">
        <a href={d.url}>{d.title}</a>
      </div> */}
    </div>
  ))
}
    </div>
  );
}

export default SearchBar;
