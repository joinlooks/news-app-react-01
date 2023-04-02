import "../css/Navbar.css";

const Navbar = ({ sidebar, toggleSidebar }) => {
	return (
		<>
			<nav className="navbar">
				<h1 className="heading">News</h1>
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
