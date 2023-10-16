function RegionFilter({setRegion}) {
  return (
    <div>
      <select className="selectOption" onClick={(e) => setRegion(e.target.value)}>
     
        <option value="none">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default RegionFilter;
