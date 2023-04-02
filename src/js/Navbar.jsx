import "../css/Navbar.css";

const Navbar = ({ toggleSidebar, category }) => {
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	return (
		<>
			<nav className="navbar">
				<h1 className="heading">{capitalizeFirstLetter(category)} News</h1>
				<div className="logo">
					<button onClick={toggleSidebar}>
						<img src="./images/menu.png" alt="Menu" />
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
