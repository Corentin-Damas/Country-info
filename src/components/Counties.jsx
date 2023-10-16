import { useState } from "react";
import { useCountry } from "../data/getDatas";
import CountryResult from "./CountryResult";
import Filter from "./Filter";

function Counties({setRegion, setSearch}) {
  const { isLoading } = useCountry();
  // console.log(countriesDatas);
  return (
    <div className="main-container">
      <Filter setRegion={setRegion} setSearch={setSearch} />
      {!isLoading && (
        <div className="result-grid">
          <CountryResult />
        </div>
      )}
    </div>
  );
}

export default Counties;
