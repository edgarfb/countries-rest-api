import React from "react";
import moon from "./images/moon-regular.svg";
import sun from "./images/sun-regular.svg";
import "./App.css";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import FilterByRegion from "./components/FilterByRegion";

function App() {
  const [allCountries, setAllCountries] = React.useState([]);
  const [theme, setTheme] = React.useState("light");
  const [firstTenCountries, setFirstTenCountries] = React.useState([]);

  // add or remove the classes in the App
  const themeHandler = () => {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };

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
    <div className={`App ${theme}`}>
      <header className="head">
        <h1>Where in the world?</h1>
        <div className="switcher" onClick={themeHandler}>
          <img src={theme === "light" ? moon : sun} alt="A nice moon" />

          {theme === "light" ? "Dark mode" : "Light mode"}
        </div>
      </header>

      <main className="mainContent">
        <SearchBar isDark={theme === "light" ? false : true} />
        <FilterByRegion isDark={theme === "light" ? false : true} />
        <section className="content">
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
        </section>
      </main>
    </div>
  );
}

export default App;
