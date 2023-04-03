import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/Sidebar.css";

const Sidebar = ({ toggleSidebar, setCategory }) => {
	const handleClick = (e) => {
		setCategory(e);
		toggleSidebar();
	};

	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<>
			<div className="menu-options">
				<div className="theme-button">
					<button
						onClick={() => {
							toggleTheme();
							toggleSidebar();
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
					{" "}
					All{" "}
				</button>
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("national")}
				>
					{" "}
					National{" "}
				</button>
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("business")}
				>
					{" "}
					Business{" "}
				</button>
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("sports")}
				>
					{" "}
					Sports{" "}
				</button>
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("world")}
				>
					{" "}
					World{" "}
				</button>
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("politics")}
				>
					{" "}
					Politics{" "}
				</button>
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("technology")}
				>
					{" "}
					Technology{" "}
				</button>
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("startup")}
				>
					{" "}
					Startup{" "}
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
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("science")}
				>
					{" "}
					Science{" "}
				</button>
				<button
					className={
						theme === "dark"
							? "dark-theme-text-primary"
							: "light-theme-text-primary"
					}
					onClick={() => handleClick("automobile")}
				>
					{" "}
					Automobile{" "}
				</button>
			</div>
		</>
	);
};

export default Sidebar;
