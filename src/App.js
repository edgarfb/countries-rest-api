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
  const [allCountries, setAllCountries] = React.useState([]);
  const [theme, setTheme] = React.useState("light");
  const [findCountryByName, setFindCountryByName] = React.useState([]);
  console.log(findCountryByName);

  const findCountryByNameHandler = (event) => {
    let target = event.target.value;
    let re = new RegExp(`^${target}`, "gi");
    let finder = allCountries.filter((country) => {
      return country.name.toLowerCase().match(re);
    });
    setFindCountryByName([...finder]);
  };

  function onRegionValHandler(val) {
    fetch(`https://restcountries.com/v2/continent/${val}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  // add or remove the classes in the App
  const themeHandler = () => {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        let tiniData = data.map((t) => {
          return {
            nativeName: t.nativeName,
            name: t.name,
            population: t.population,
            capital: t.capital,
            flag: t.flags[0],
            region: t.region,
          };
        });
        setAllCountries([...tiniData]);
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
          {/* I'm used isDark to change the path of the svg icons */}
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
              {findCountryByName.length === 0 &&
                allCountries.map((c) => {
                  return (
                    <Card
                      key={Math.random()}
                      name={c.name}
                      population={c.population}
                      region={c.region}
                      capital={c.capital}
                      img={c.flag}
                    />
                  );
                })}
              {findCountryByName.length > 0 &&
                findCountryByName.map((c) => {
                  return (
                    <Card
                      key={Math.random()}
                      name={c.name}
                      population={c.population}
                      region={c.region}
                      capital={c.capital}
                      img={c.flag}
                    />
                  );
                })}
            </section>
          </Route>

          <Route path="/country-details/:name">
            <CountryDetails />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
