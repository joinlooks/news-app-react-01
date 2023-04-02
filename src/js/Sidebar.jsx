import "../css/Sidebar.css";

const Sidebar = ({ toggleSidebar, setCategory }) => {
	const handleClick = (e) => {
		setCategory(e);
		toggleSidebar();
	};

	return (
		<>
			<div className="close-button">
				<button onClick={toggleSidebar}>
					<img src="./images/close.png" alt="Close" />
				</button>
			</div>
			<div className="sidebar">
				<button onClick={() => handleClick("all")}> All </button>
				<button onClick={() => handleClick("national")}> National </button>
				<button onClick={() => handleClick("business")}> Business </button>
				<button onClick={() => handleClick("sports")}> Sports </button>
				<button onClick={() => handleClick("world")}> World </button>
				<button onClick={() => handleClick("politics")}> Politics </button>
				<button onClick={() => handleClick("technology")}> Technology </button>
				<button onClick={() => handleClick("startup")}> Startup </button>
				<button onClick={() => handleClick("entertainment")}>
					Entertainment
				</button>
				<button onClick={() => handleClick("miscellaneous")}>
					Miscellaneous
				</button>
				<button onClick={() => handleClick("science")}> Science </button>
				<button onClick={() => handleClick("automobile")}> Automobile </button>
			</div>
		</>
	);
};

export default Sidebar;
