import NightmodeSwitch from "./NightmodeSwitch";

function Header({isNightActive, setIsNightActive}) {
  return (
    <header className="header">
      <h2>Where in the world?</h2>
      <NightmodeSwitch isNightActive={isNightActive} setIsNightActive={setIsNightActive}/>
    </header>

  );
}

export default Header;
