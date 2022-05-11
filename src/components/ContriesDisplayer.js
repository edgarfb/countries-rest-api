import Card from "../components/Card";

function CountriesDisplayer({ countries }) {
  return (
    <section className="content">
      {countries &&
        countries.map((country) => {
          return <Card key={country.cca3} country={country} />;
        })}
    </section>
  );
}

export default CountriesDisplayer;
