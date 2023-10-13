import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  countriesDatas: {},
  isLoading: true,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "countriesDatas/loaded":
      return { ...state, isLoading: false, countriesDatas: action.payload };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
  }
}

function MyProvider({ search, children }) {
  const [{ countriesDatas, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  //   console.log(search)
  useEffect(() => {
    async function getCountriesData() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`http://localhost:9000/data`);
        if (!res.ok) throw Error("Failed getting data");
        const data = await res.json();
        // console.log(data)

        dispatch({ type: "countriesDatas/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading datas...",
        });
      }
    }
    getCountriesData();
  }, [search]);
  return (
    <AppContext.Provider value={{ countriesDatas, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
}

function useCountry() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("Function was used outside My Provider");
  return context;
}

export { MyProvider, useCountry };
