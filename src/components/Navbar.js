import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/Styles";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/NavbarStyles";

import { LanguageContext } from "../contexts/LanguageContext";

const content = {
	english: {
		search: "Search",
		flag: "🇦🇺"
	},
	french: {
		search: "Chercher",
		flag: "🇫🇷"
	},
	spanish: {
		search: "Buscar",
		flag: "🇧🇬"
	}
};

const Navbar = props => {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
	const { curLanguage } = useContext(LanguageContext);
	const { classes } = props;
	const { search, flag } = content[curLanguage];

	return (
		<div className={classes.root}>
			<AppBar position="static" color={isDarkTheme ? "default" : "primary"}>
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit">
						<span>{flag}</span>
					</IconButton>
					<Typography className={classes.title} variant="h6" color="inherit">
						React Hooks With Context
					</Typography>
					<Switch onChange={toggleTheme} />
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder={`${search}...`}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

//Extracting withLanguageContext as higher order component property
export default withStyles(styles)(Navbar);
