import { useCountry } from "../data/getDatas";

function CountryResult() {
  const { countriesDatas } = useCountry();

  return countriesDatas.map((country) => (
    <div key={country.name.common} className="country-box">
      <div className="box__flag">{country.flag}</div>
      <div className="box__info">
        <h3 className="box__info-name">{country.name.common}</h3>
        <p className="home box__info-data">
          <span className="u-bold">Population: </span>
          {new Intl.NumberFormat("de-DE").format(country.population)}
        </p>
        <p className="home box__info-data">
          <span className="u-bold">Region: </span>
          {country.region}
        </p>
        <p className="home box__info-data">
          <span className="u-bold">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  ));
}

export default CountryResult;
