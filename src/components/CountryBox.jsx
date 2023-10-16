import { useState } from "react";
import OnFocusCountry from "./OnFocusCountry";

function CountryBox({ country, isSelected, setIsSelected }) {
  function handleOnClick() {
    setIsSelected(country.name.common);
  }

  return (
    <>
      {!isSelected && (
        <div className="country-box" onClick={handleOnClick}>
          <div className="box__flag"><img src={country.flags.svg} alt="country flag" /></div>
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
      )}
      {}
    </>
  );
}
export default CountryBox;
