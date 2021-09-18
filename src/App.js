import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
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
    <div className="App">
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
    </div>
  );
}

export default App;
