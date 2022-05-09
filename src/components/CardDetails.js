import React from "react";
import styles from "./CardDetails.module.css";
import { Link } from "react-router-dom";

function Border(props) {
  return (
    <Link
      to={`/country-details/${props.countryName}`}
      className={styles.border}
    >
      {props.countryName}
    </Link>
  );
}

// Main
function CardDetails(props) {
  const [borders, setBorders] = React.useState([]);

  React.useEffect(() => {
    if (props.bordersPath) {
      fetch(`https://restcountries.com/v2/alpha?codes=${props.bordersPath}`)
        .then((res) => res.json())
        .then((data) => {
          let dataFilter = data.filter((data) => data !== null);
          let countryName = dataFilter.map((c) => {
            return c.name;
          });
          setBorders((prev) => [...countryName]);
        });
    }
  }, [props.bordersPath]);

  return (
    <div className={styles.cardDetails}>
      <div className={styles.flag}>
        <img src={props.flag} alt={`${props.name} flag`} />
      </div>
      <div className={styles.countryData}>
        <h3>{props.name}</h3>
        <div className={styles.countryDataInner}>
          <div className={styles.mainData}>
            <h4>
              Native Name: <span>{props.nativeName}</span>
            </h4>
            <h4>
              Population: <span>{props.population}</span>
            </h4>
            <h4>
              Region: <span>{props.region}</span>
            </h4>
            <h4>
              Sub Region: <span>{props.subregion}</span>
            </h4>
            <h4>
              Capital: <span>{props.capital}</span>
            </h4>
          </div>
          <div className={styles.secondaryData}>
            <h4>
              Top Lavel Domain: <span>{props.topLevelDomain}</span>
            </h4>
            <h4>
              Currencies: <span>{props.currencies}</span>
            </h4>
            <h4>
              Languages: <span>{props.languages}</span>
            </h4>
          </div>
        </div>
        <div className={styles.borderCountries}>
          <h4>Border Countries: </h4>
          {/* continue here --- working but need to fix the styles */}
          {borders.map((b) => (
            <Border key={b} countryName={b} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
