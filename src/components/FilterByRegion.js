import React from "react";
import styles from "./FilterByRegion.module.css";
import arrow from "../images/chevron-down-solid.svg";
import arrowBlack from "../images/chevron-down-solid-black.svg";

const values = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
function Option(props) {
  return (
    <option onClick={() => props.onRegionVal(props.val)} value={props.val}>
      {props.val}
    </option>
  );
}

function FilterByRegion(props) {
  const [isClicked, setIsClicked] = React.useState(false);
  const clickArrowHandler = () => {
    setIsClicked(isClicked ? false : true);
  };
  //   TODO =>>>> add function to handler the options and filter it
  const options = (
    <div className={styles.options}>
      {values.map((region) => (
        <Option val={region} onRegionVal={props.onRegionVal} />
      ))}
      {/* <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option> */}
    </div>
  );
  return (
    <div className={styles.region} role="select">
      <div className={styles.select}>
        <div className={styles.label}>Filter by Region</div>
        <div className={styles.icon} onClick={clickArrowHandler}>
          <img src={props.isDark ? arrow : arrowBlack} alt="Arrow" />
        </div>
      </div>

      {isClicked && options}
    </div>
  );
}

export default FilterByRegion;
