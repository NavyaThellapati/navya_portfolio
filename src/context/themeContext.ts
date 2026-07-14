import { createContext } from "react";
import type { ThemeName } from "../types/portfolio";

export interface ThemeContextValue {
  theme: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
