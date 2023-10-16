import { useState } from "react";
import { MyProvider } from "./data/getDatas";
import Header from "./components/Header";
import Countries from "./components/Counties";

function App() {
  const [isNightActive, setIsNightActive] = useState(false);

  return (
    <>
      <div className="app-container" data-theme={isNightActive ? "dark" : ""}>
        <MyProvider>
          <div className="app">
            <Header
              isNightActive={isNightActive}
              setIsNightActive={setIsNightActive}
            />
            <Countries />
          </div>
        </MyProvider>
      </div>
    </>
  );
}

export default App;
