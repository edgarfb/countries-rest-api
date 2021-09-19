import React from "react";
import moon from "./moon-regular.svg";
import styles from "./App.module.css";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

function App() {
  const [allCountries, setAllCountries] = React.useState([]);
  const [firstTenCountries, setFirstTenCountries] = React.useState([]);

  console.log(firstTenCountries);
  React.useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        let tiniData = data.map((t) => {
          return {
            name: t.name,
            population: t.population,
            capital: t.capital,
            flag: t.flag,
            region: t.region,
          };
        });
        setAllCountries([...tiniData]);
        setFirstTenCountries([...tiniData.slice(0, 10)]);
      });
  }, []);
  return (
    <div className={styles.App}>
      <header className={styles.head}>
        <h1>Where in the world?</h1>
        <div className={styles.switcher}>
          <img src={moon} alt="A nice moon" />
          Dark mode
        </div>
      </header>

      <SearchBar />
      <main className={styles.mainContent}>
        {firstTenCountries.map((c) => {
          return (
            <Card
              name={c.name}
              population={c.population}
              region={c.region}
              capital={c.capital}
              img={c.flag}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
