import { useCountry } from "../data/getDatas";
import CountryResult from "./CountryResult";

function Counties() {
  const { isLoading, countriesDatas } = useCountry();
  console.log(countriesDatas);
  return (
    <div>
      {/* {!isLoading && (
        <>
          {" "}
          <CountryResult />{" "}
        </>
      )} */}
    </div>
  );
}

export default Counties;
