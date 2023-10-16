import { useCountry } from "../data/getDatas";
import CountryBox from "./CountryBox";
import { useState } from "react";
import OnFocusCountry from "./OnFocusCountry";

function CountryResult({ region, search }) {
  const [isSelected, setIsSelected] = useState("");
  const { countriesDatas } = useCountry();
  // all
  return countriesDatas.map((country) => {
    // Filter By region 
    if (region != "" && country.region != region) {
      return;
    }

    // Filter by search
    if (
      search != "" &&
      country.name.common.toLowerCase() != search.toLowerCase()
    ) {
      return;

    } 

    // Focus on a country
    if(isSelected != "" && isSelected == country.name.common){
      return <OnFocusCountry key={country.name.official} country={country} setIsSelected={setIsSelected}/>
    }

    // Return the element
    else {
      return (
        <CountryBox
          key={country.name.official}
          country={country}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      );
    }
  });
}

export default CountryResult;
