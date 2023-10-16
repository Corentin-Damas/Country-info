function OnFocusCountry({ country, setIsSelected }) {
  function handleOnClick(e) {
    e.preventDefault();
    setIsSelected("");
  }
  //   console.log(country.name)

  function getNativeName(object) {
    const nativeName = { ...object };
    return nativeName[Object.keys(nativeName)[0]].official;
  }
  function getCurrency(object) {
    const currency = { ...object };
    return currency[Object.keys(currency)[0]].name;
  }
  function getLanguage(object) {
    const languages = { ...object };
    const lanRefact = languages[Object.keys(languages)];
    return lanRefact;
  }

  return (
    <div className="container-onfocus">
      <div className="onfocus">
        <button className="btn-return" onClick={handleOnClick}>&larr; Back</button>
        <div className="grid-detail">
          <div className="left-detail">{country.flag}</div>
          <div className="right-detail">
            <h1 className="detail-title">{country.name.common}</h1>
            <div className="col-1">
              <p className="detail box__info-data">
                <span className="u-bold">Native Name: </span>
                {getNativeName(country.name.nativeName)}
              </p>
              <p className="detail box__info-data">
                <span className="u-bold">Population: </span>
                {new Intl.NumberFormat("de-DE").format(country.population)}
              </p>
              <p className="detail box__info-data">
                <span className="u-bold">Region: </span>
                {country.region}
              </p>
              <p className="detail box__info-data">
                <span className="u-bold">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="detail box__info-data">
                <span className="u-bold">Sub Region: </span>
                {country.capital}
              </p>
            </div>
            <div className="col-2">
              <p className="detail box__info-data">
                <span className="u-bold">Top Level Domain: </span>
                {country.tld}
              </p>
              <p className="detail box__info-data">
                <span className="u-bold">Currency: </span>
                {getCurrency(country.currencies)}
              </p>
              <p className="detail box__info-data">
                <span className="u-bold">Languages: </span>
                {getLanguage(country.languages)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnFocusCountry;
