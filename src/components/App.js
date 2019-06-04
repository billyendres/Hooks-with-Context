import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContents from "./PageContents";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";

const App = () => {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<PageContents>
					<Navbar />
					<Form />
				</PageContents>
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default App;
