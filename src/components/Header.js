import { useState } from "react";

function Header({ onDarkModeClick }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    {
      isDarkMode ? onDarkModeClick(`light`) : onDarkModeClick(`dark`);
    }
  }
  return (
    <div>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Light " : "Dark "}
        Mode
      </button>
    </div>
  );
}

export default Header;