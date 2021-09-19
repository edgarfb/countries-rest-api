import React from "react";
import styles from "./FilterByRegion.module.css";
import arrow from "../chevron-down-solid.svg";

function FilterByRegion() {
  const [isClicked, setIsClicked] = React.useState(false);
  const clickArrowHandler = () => {
    setIsClicked(isClicked ? false : true);
  };
  //   TODO =>>>> add function to handler the options and filter it
  const options = (
    <div className={styles.options}>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </div>
  );
  return (
    <div className={styles.region} role="select">
      <div className={styles.select}>
        <div className={styles.label}>Filter by Region</div>
        <div className={styles.icon} onClick={clickArrowHandler}>
          <img src={arrow} alt="Arrow" />
        </div>
      </div>

      {isClicked && options}
    </div>
  );
}

export default FilterByRegion;
