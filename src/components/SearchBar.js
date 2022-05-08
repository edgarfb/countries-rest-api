import React from "react";
import styles from "./SearchBar.module.css";
import searchSvgIcon from "../images/search-solid.svg";
import searchSvgIconBlack from "../images/search-solid-black.svg";

function SearchBar(props) {
  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        //  TODO here a function the tracker and filter the user input
        e.preventDefault();
      }}
    >
      <button className={styles.searchIcon}>
        <img
          src={props.isDark ? searchSvgIcon : searchSvgIconBlack}
          alt="Search icon"
        />
      </button>
      <input
        onChange={(e) => {
          props.onFindCountryByName(e);
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
