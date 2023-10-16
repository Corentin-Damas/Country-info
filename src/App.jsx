import { useState } from "react";
import { MyProvider } from "./data/getDatas";
import Header from "./components/Header";
import Countries from "./components/Counties";

function App() {
  const [isNightActive, setIsNightActive] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] =useState('')

  return (
    <>
      <div className="app-container" data-theme={isNightActive ? "dark" : ""}>
        <MyProvider country={search}>
          <div className="app">
            <Header
              isNightActive={isNightActive}
              setIsNightActive={setIsNightActive}
            />
            <Countries setRegion={setRegion} setSearch={setSearch} />
          </div>
        </MyProvider>
      </div>
    </>
  );
}

export default App;
