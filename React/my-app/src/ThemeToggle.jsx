import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const style = {
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000",
    height: "100vh",
    textAlign: "center",
    paddingTop: "100px"
  };
  return (
    <div style={style}>
      <h1>{dark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
