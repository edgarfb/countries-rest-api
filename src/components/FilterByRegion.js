import React from "react";
import styles from "./FilterByRegion.module.css";
import arrow from "../images/chevron-down-solid.svg";
import arrowBlack from "../images/chevron-down-solid-black.svg";
import { motion } from "framer-motion/dist/framer-motion";

const values = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
function Option({ onRegionVal, val }) {
  return (
    <option
      onClick={() => {
        onRegionVal(val);
      }}
      value={val}
    >
      {val}
    </option>
  );
}

function FilterByRegion({ onRegionVal, isDark }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const clickArrowHandler = () => {
    setIsClicked(isClicked ? false : true);
  };
  const options = (
    <motion.div
      className={styles.options}
      initial={{ height: 0 }}
      animate={{ height: "130px" }}
    >
      {values.map((region) => (
        <Option key={region} val={region} onRegionVal={onRegionVal} />
      ))}
    </motion.div>
  );
  return (
    <div className={styles.region}>
      <div className={styles.select}>
        <div className={styles.label}>Filter by Region</div>
        <div className={styles.icon} onClick={clickArrowHandler}>
          <img src={isDark ? arrow : arrowBlack} alt="Arrow" />
        </div>
      </div>

      {isClicked && options}
    </div>
  );
}

export default FilterByRegion;
