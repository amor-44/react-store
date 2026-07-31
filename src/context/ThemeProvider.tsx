import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};