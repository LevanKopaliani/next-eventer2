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
      className={styles.button}
      onClick={() => {
        searchInput.current.focus();
        setSearchActive(true);
        props.searchisOpen(true);
        //// need to fix onblur action conflict
      }}
    >
      {serachActive ? (
        <SearchImageX
          className={styles.search_x}
          fill={props.scrollHeight ? "#000" : "#fff"}
        />
      ) : (
        <SearchImage fill={props.scrollHeight ? "#000" : "#fff"} />
      )}
    </button>
  );

  return (
    <div className={styles.searchbar}>
      <div
        className={styles.form}
        style={{
          borderBottom: `1px solid ${
            serachActive
              ? props.scrollHeight
                ? "#333"
                : "#fff"
              : "transparent"
          }`,
          width: serachActive ? "100%" : "25px",
          transition: "all 0.5s ease",
        }}
      >
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
          className={styles.input}
        />

        {SearchButton}
      </div>
    </div>
  );
};

export default SearchBar;
