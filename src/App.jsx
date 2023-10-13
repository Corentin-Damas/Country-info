import { useState } from "react";
import { MyProvider } from "./data/getDatas";
import Header from "./components/Header";
import Countries from "./components/Counties";

function App() {
  const [search, setSearch] = useState("Venezuela");

  return (
    <>
      <div>
        <MyProvider search={search}>
          <Header/>
          <Countries/>
        </MyProvider>
      </div>
    </>
  );
}

export default App;
