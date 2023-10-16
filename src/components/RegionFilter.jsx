function RegionFilter({setRegion}) {
  return (
    <div>
      <select className="selectOption" onClick={(e) => setRegion(e.target.value)}>
     
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default RegionFilter;
