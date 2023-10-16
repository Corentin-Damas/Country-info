
function NightmodeSwitch({isNightActive, setIsNightActive}) {

  return (
    <div className="night-mode-switcher">
      <label className="switch">
        <input
          type="checkbox"
          id="nightMode"
          className="checkbox"
          onClick={() => setIsNightActive(!isNightActive)}
        />
        <span className="slider round"></span>
      </label>
      <div className="button-subtext">
        <svg
          className="fill"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            className={isNightActive ? "fill" : ""}
            fill="none"
            stroke="#838383"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
        <h3>DarkMode</h3>
      </div>
    </div>
  );
}

export default NightmodeSwitch;
