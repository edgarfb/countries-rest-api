import React from "react";
import moon from "./images/moon-regular.svg";
import sun from "./images/sun-regular.svg";
import "./App.css";

// Componets
import SearchBar from "./components/SearchBar";
import FilterByRegion from "./components/FilterByRegion";
import CountryDetails from "./pages/CountryDetails";
import CountriesDisplayer from "./components/ContriesDisplayer";

// Router
import { Route, Switch } from "react-router-dom";

function App() {
  const [allCountries, setAllCountries] = React.useState(null);
  const [theme, setTheme] = React.useState("light");
  const [countriesToDisplay, setCountriesToDisplay] = React.useState(null);
  // TODO: Add a state for the filtered matches countries
  const [noCountryMatch, setNoCountryMatch] = React.useState(false);

  const findCountryByNameHandler = (event) => {
    let target = event.target.value;
    let re = new RegExp(`(^${target})\\w`, "gi");
    let finder = allCountries.filter((country) => {
      return country.name.common.toLowerCase().match(re);
    });
    if (target === "") setCountriesToDisplay(allCountries.slice(0, 10));
    else if (target.length > 0 && finder.length > 0) {
      setCountriesToDisplay([...finder]);
      setNoCountryMatch(false);
    } else {
      setNoCountryMatch(true);
    }
  };

  function onRegionValHandler(val) {
    let finder = allCountries.filter((country) => country.region === val);
    setCountriesToDisplay([...finder]);
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
        setCountriesToDisplay(countries.slice(0, 10));
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
            {!noCountryMatch && (
              <CountriesDisplayer countries={countriesToDisplay} />
            )}
            {noCountryMatch && (
              <p className="noMatchMessage">
                There are no countries with that name 😞
              </p>
            )}
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
