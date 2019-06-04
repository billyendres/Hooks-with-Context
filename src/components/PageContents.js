import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const PageContents = props => {
	const { isDarkTheme } = useContext(ThemeContext);
	const styles = {
		width: "100vw",
		height: "100vh",
		backgroundColor: isDarkTheme ? "red" : "white"
	};
	return <div style={styles}>{props.children}</div>;
};

export default PageContents;
