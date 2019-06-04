import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = props => {
	const [curLanguage, setLanguage] = useState("english");
	const changeLanguage = evt => setLanguage(evt.target.value);

	//value prop is passed down to any consuming components

	return (
		<LanguageContext.Provider value={{ curLanguage, changeLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	);
};
