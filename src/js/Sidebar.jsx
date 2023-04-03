import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/Sidebar.css";
import Footer from "./Footer";

const Sidebar = ({ toggleSidebar, setCategory }) => {
	const handleClick = (e) => {
		setCategory(e);
		toggleSidebar();
	};

	const { theme } = useContext(ThemeContext);

	return (
		<>
			<div
				className={`sidebar-content ${
					theme === "dark" ? "dark-theme" : "light-theme"
				}`}
			>
				<div className="menu-options">
					<div className="close-button">
						<button onClick={toggleSidebar}>
							<img
								src={
									theme === "dark"
										? "./images/close-dark-theme.png"
										: "./images/close-light-theme.png"
								}
								alt="Theme"
							/>
						</button>
					</div>
				</div>
				<div className={`sidebar`}>
					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("all")}
					>
						All
					</button>
					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("national")}
					>
						National
					</button>
					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("business")}
					>
						Business
					</button>
					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("sports")}
					>
						Sports
					</button>
					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("world")}
					>
						World
					</button>

					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("technology")}
					>
						Technology
					</button>
					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("startup")}
					>
						Startup
					</button>

					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("science")}
					>
						Science
					</button>

					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("politics")}
					>
						Politics
					</button>

					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("automobile")}
					>
						Automobile
					</button>

					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("entertainment")}
					>
						Entertainment
					</button>

					<button
						className={
							theme === "dark"
								? "dark-theme-text-primary"
								: "light-theme-text-primary"
						}
						onClick={() => handleClick("miscellaneous")}
					>
						Miscellaneous
					</button>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Sidebar;
