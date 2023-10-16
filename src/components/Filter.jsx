import SearchFilter from "./SearchFilter";
import RegionFilter from "./RegionFilter";

function Filter({setRegion, setSearch}) {
  return (
    <div className="filters">
      <SearchFilter setSearch={setSearch} />
      <RegionFilter setRegion={setRegion}/>
    </div>
  );
}

export default Filter;
