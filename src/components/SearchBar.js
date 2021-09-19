import React from "react";
import styles from "./SearchBar.module.css";
import searchSvgIcon from "../search-solid.svg";

function SearchBar() {
  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        //  TODO here a function the tracker and filter the user input
        e.preventDefault();
        console.log("hi");
      }}
    >
      <button className={styles.searchIcon}>
        <img src={searchSvgIcon} alt="Search icon" />
      </button>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
}

export default SearchBar;
