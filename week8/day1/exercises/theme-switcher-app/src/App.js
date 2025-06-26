import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import CharacterCounter from "./CharacterCounter";

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>🌗 Theme Switcher</h1>
      <ThemeSwitcher />
      <hr />
      <CharacterCounter />
    </div>
  );
}

export default App;
