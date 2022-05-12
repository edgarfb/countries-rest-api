import React from "react";
import styles from "./SearchBar.module.css";
import searchSvgIcon from "../images/search-solid.svg";
import searchSvgIconBlack from "../images/search-solid-black.svg";

function SearchBar({ isDark, onFindCountryByName }) {
  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <button className={styles.searchIcon}>
        <img
          src={isDark ? searchSvgIcon : searchSvgIconBlack}
          alt="Search icon"
        />
      </button>
      <input
        onChange={(e) => {
          onFindCountryByName(e);
        }}
        className={styles.searchInput}
        type="text"
        placeholder="Search for a country..."
        autoFocus
      />
    </form>
  );
}

export default SearchBar;
