import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
	constructor(props) {
		super(props);
		this.state = { curLanguage: "english" };
	}

	changeLangauge = evt => {
		this.setState({ curLanguage: evt.target.value });
	};

	//value prop is passed down to any consuming components
	render() {
		return (
			<LanguageContext.Provider
				value={{ ...this.state, changeLanguage: this.changeLangauge }}
			>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}
