import React from "react";
import moon from "./images/moon-regular.svg";
import sun from "./images/sun-regular.svg";
import "./App.css";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import FilterByRegion from "./components/FilterByRegion";
import { Route, Switch } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const [allCountries, setAllCountries] = React.useState(null);
  const [theme, setTheme] = React.useState("light");
  const [showCountry, setShowCountry] = React.useState(null);

  console.log("showCountry", showCountry);

  const findCountryByNameHandler = (event) => {
    let target = event.target.value;
    let re = new RegExp(`^${target}`, "gi");
    let finder = allCountries.filter((country) => {
      return country.name.common.toLowerCase().match(re);
    });
    console.log("Finder", finder);
    setShowCountry([...finder]);
  };

  function onRegionValHandler(val) {
    let finder = allCountries.filter((country) => country.region === val);
    setShowCountry([...finder]);
  }
  // add or remove the classes in the App
  const themeHandler = () => {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countries) => {
        setAllCountries(countries);
        // TODO: feature: ramdomly select the initial countries
        setShowCountry(countries.slice(0, 10));
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

      <Switch>
        <main className="mainContent">
          <Route path="/" exact>
            <div className="finder">
              <SearchBar
                isDark={theme === "light" ? false : true}
                onFindCountryByName={findCountryByNameHandler}
              />
              <FilterByRegion
                onRegionVal={onRegionValHandler}
                isDark={theme === "light" ? false : true}
              />
            </div>
            <section className="content">
              {showCountry &&
                showCountry.map((c) => {
                  return (
                    <Card
                      key={c.name.common}
                      name={c.name.common}
                      population={c.population}
                      region={c.region}
                      capital={c.capital ? c.capital[0] : "No capital"}
                      img={c.flags.png}
                    />
                  );
                })}
            </section>
            {/*
              {showCountry.length > 0 &&
                showCountry.map((c) => {
                  return (
                    <Card
                      key={Math.random() + Math.random() * 10}
                      name={c.name}
                      population={c.population}
                      region={c.region}
                      capital={c.capital}
                      img={c.flag}
                    />
                  );
                })}
            </section> */}
          </Route>

          <Route path="/country-details/:name">
            <CountryDetails isDark={theme === "light" ? false : true} />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
