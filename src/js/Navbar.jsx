import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/Navbar.css";

const Navbar = ({ toggleSidebar, category }) => {
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<>
			<nav
				className={`navbar ${theme === "dark" ? "dark-theme" : "light-theme"}`}
			>
				<h1
					className={`heading ${
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}`}
				>
					{capitalizeFirstLetter(category)}
				</h1>

				<div className="nav-box">
					<div className="theme-button">
						<button
							onClick={() => {
								toggleTheme();
							}}
						>
							<img
								src={
									theme === "dark"
										? "./images/change-theme-dark-theme.png"
										: "./images/change-theme-light-theme.png"
								}
								alt="Close"
							/>
						</button>
					</div>
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
				</div>
			</nav>
		</>
	);
};

export default Navbar;
