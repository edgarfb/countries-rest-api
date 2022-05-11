import React from "react";
import styles from "./CountryDetails.module.css";
import CardDetails from "../components/CardDetails";
import { Link, useParams } from "react-router-dom";
import arrowLeft from "../images/arrow-left-solid.svg";
import arrowLeftWithe from "../images/arrow-left-solid-white.svg";

function CountryDetails(props) {
  const [country, setCountry] = React.useState(null);

  const params = useParams();
  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${params.name}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
      });
  }, [params.name]);

  return (
    <div className={styles.container}>
      <Link className={styles.back} to="/">
        <div className={styles.arrow}>
          <img
            src={props.isDark ? arrowLeftWithe : arrowLeft}
            alt="Arrow to left"
          />
        </div>
        <div className={styles.txt}>Back</div>
      </Link>
      {country && <CardDetails country={country} />}
    </div>
  );
}

export default CountryDetails;
