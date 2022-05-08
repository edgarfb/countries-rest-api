import Card from "../components/Card";

function CountriesDisplayer({ countries }) {
  return (
    <section className="content">
      {countries &&
        countries.map((c) => {
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
  );
}

export default CountriesDisplayer;
