import React from "react";
import styles from "./FilterByRegion.module.css";
import arrow from "../chevron-down-solid.svg";

function FilterByRegion() {
  const [isClicked, setIsClicked] = React.useState(false);
  const clickArrowHandler = () => {
    setIsClicked(isClicked ? false : true);
  };
  return (
    <div className={styles.region} role="select">
      <div className={styles.select}>
        <div className={styles.label}>Filter by Region</div>
        <div className={styles.icon} onClick={clickArrowHandler}>
          <img src={arrow} alt="Arrow" />
        </div>
      </div>

      {isClicked && (
        <div className={styles.options}>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </div>
      )}
    </div>
  );
}

export default FilterByRegion;
