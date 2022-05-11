import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

function Card({ country }) {
  const { cca3, name, flags, population, region, capital } = country;
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <div className={styles.flag}>
        <Link to={`/country-details/${cca3}`}>
          <img src={flags.png} alt={`${name.common}'s flag`} />
        </Link>
      </div>
      <div className={styles.countryData}>
        <h3>{name.common}</h3>
        <h4>
          Population: <span>{population}</span>
        </h4>
        <h4>
          Region: <span>{region}</span>
        </h4>
        <h4>
          Capital: <span>{capital}</span>
        </h4>
      </div>
    </motion.div>
  );
}

export default Card;
