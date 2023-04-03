import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/Navbar.css";

const Navbar = ({ toggleSidebar, category }) => {
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const { theme } = useContext(ThemeContext);

	return (
		<>
			<nav
				className={`navbar ${theme === "dark" ? ".dark-theme" : "light-theme"}`}
			>
				<h1
					className={`heading ${
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}`}
				>
					{capitalizeFirstLetter(category)} News
				</h1>
				<div className="logo">
					<button onClick={toggleSidebar}>
						<img
							src={
								theme === "dark"
									? "./images/menu-dark-theme.png"
									: "./images/menu-light-theme.png"
							}
							alt="Menu"
						/>
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
