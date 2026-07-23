import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const themeStorageKey = "portfolio-theme";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const initializeTheme = () => {
  const savedTheme = window.localStorage.getItem(themeStorageKey);
  const theme =
    savedTheme === "system" || savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : "dark";
  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(resolvedTheme);
  document.documentElement.style.colorScheme = resolvedTheme;
};

initializeTheme();

createRoot(document.getElementById("root")!).render(<App />);