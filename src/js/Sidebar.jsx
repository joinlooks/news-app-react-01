import "../css/Sidebar.css";

const Sidebar = ({ sidebar, toggleSidebar }) => {
	return (
		<>
			<div className="close-button">
				<button onClick={toggleSidebar}>
					<img src="./images/close.png" alt="Close" />
				</button>
			</div>
			<div className="sidebar">
				<p> all </p>
				<p> national </p>
				<p> business </p>
				<p> sports </p>
				<p> world </p>
				<p> politics </p>
				<p> technology </p>
				<p> startup </p>
				<p> entertainment </p>
				<p> miscellaneous </p>
				<p> science </p>
				<p> automobile </p>
			</div>
		</>
	);
};

export default Sidebar;
