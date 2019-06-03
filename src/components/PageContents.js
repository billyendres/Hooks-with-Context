import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class PageContents extends Component {
	static contextType = ThemeContext;
	render() {
		const { isDarkTheme } = this.context;
		const styles = {
			width: "100vw",
			height: "100vh",
			backgroundColor: isDarkTheme ? "red" : "white"
		};
		return <div style={styles}>{this.props.children}</div>;
	}
}

export default PageContents;
