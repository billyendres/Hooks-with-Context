import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
	constructor(props) {
		super(props);
		this.state = { isDarkTheme: true };
	}

	themeToggle = () => {
		this.setState({ isDarkTheme: !this.state.isDarkTheme });
	};

	//value prop is passed down to any consuming components
	render() {
		return (
			<ThemeContext.Provider
				value={{ ...this.state, themeToggle: this.themeToggle }}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}
