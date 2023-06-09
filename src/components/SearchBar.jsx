"use client";
import React, { useState, useRef } from "react";
import SearchImage from "@/assets/img/SearchImage";
import SearchImageX from "@/assets/img/SearchImageX";

import styles from "../Styles/SearchBar.module.css";

const SearchBar = (props) => {
  const [serachActive, setSearchActive] = useState(false);
  const searchInput = useRef();

  const SearchButton = (
    <button
      className={styles.search_button}
      onClick={() => {
        searchInput.current.focus();
        setSearchActive(true);
        props.searchisOpen(true);
        //// need to fix onblur action conflict
      }}
    >
      {serachActive ? (
        <SearchImageX fill={props.scrollHeight ? "#000" : "#fff"} />
      ) : (
        <SearchImage fill={props.scrollHeight ? "#000" : "#fff"} />
      )}
    </button>
  );

  return (
    <div className={styles.searchbar}>
      <div className={styles.search_form}>
        <input
          style={{
            width: serachActive ? "100%" : "0px",
            transition: "all 0.5s ease",
          }}
          ref={searchInput}
          type="search"
          onBlur={() => {
            setSearchActive(false);
            props.searchisOpen(false);
          }}
          placeholder="SEARCH"
          className={styles.search_form_input}
        />

        {SearchButton}
      </div>
    </div>
  );
};

export default SearchBar;
