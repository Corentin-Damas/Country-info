import { useState } from "react";
import { useCountry } from "../data/getDatas";
import CountryResult from "./CountryResult";
import Filter from "./Filter";

function Counties() {
  const { isLoading } = useCountry();

  const [region, setRegion] =useState('')
  const [search, setSearch] = useState("");
  // console.log(countriesDatas);
  return (
    <div className="main-container">
      <Filter setRegion={setRegion} setSearch={setSearch} />
      {!isLoading && (
        <div className="result-grid">
          <CountryResult region={region} search={search} />
        </div>
      )}
    </div>
  );
}

export default Counties;
