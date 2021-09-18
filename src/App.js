import logo from "./logo.svg";
import moon from "./moon-regular.svg";
import styles from "./App.module.css";
import Card from "./components/Card";

console.log(moon);
const HARD_DATA = [
  {
    name: "Argentina",
    population: "54.554.333",
    region: "Americas",
    capital: "Ciudad de Buenos Aires",
    imgSrc: "https://restcountries.eu/data/arg.svg",
  },
  {
    name: "Argentina",
    population: "54.554.333",
    region: "Americas",
    capital: "Ciudad de Buenos Aires",
    imgSrc: "https://restcountries.eu/data/asm.svg",
  },
];
function App() {
  return (
    <div className={styles.App}>
      <header className={styles.head}>
        <h1>Where in the world?</h1>
        <div className={styles.switcher}>
          <img src={moon} alt="A nice moon" />
          Dark mode
        </div>
      </header>
      <main>
        {HARD_DATA.map((c) => {
          return (
            <Card
              name={c.name}
              population={c.population}
              region={c.region}
              capital={c.capital}
              img={c.imgSrc}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
