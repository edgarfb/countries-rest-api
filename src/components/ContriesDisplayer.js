import Card from "../components/Card";

function CountriesDisplayer({ countries }) {
  return (
    <section className="content">
      {countries &&
        countries.map((c) => {
          return (
            // I need to refactor how  I pass the props
            <Card
              key={c.name.common}
              name={c.name.common}
              code={c.cca3}
              population={c.population}
              region={c.region}
              capital={c.capital ? c.capital[0] : "No capital"}
              img={c.flags.png}
            />
          );
        })}
    </section>
  );
}

export default CountriesDisplayer;
