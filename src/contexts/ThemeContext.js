import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export const ThemeProvider = props => {
	const [isDarkTheme, toggleTheme] = useToggleState(true);

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
