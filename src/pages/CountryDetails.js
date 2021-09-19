import React from "react";
import styles from "./CountryDetails.module.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const c = {
  capital: "Kabul",
  flag: "https://restcountries.eu/data/afg.svg",
  name: "Afghanistan",
  population: 27657145,
};

function CountryDetails() {
  return (
    <div>
      <Link to="/">
        <a>Home</a>
      </Link>
      <h1>Countries detalis</h1>
      <Card
        name={c.name}
        population={c.population}
        region={c.region}
        capital={c.capital}
        img={c.flag}
      />
    </div>
  );
}

export default CountryDetails;
